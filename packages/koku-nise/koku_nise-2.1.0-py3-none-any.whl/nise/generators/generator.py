#
# Copyright 2018 Red Hat, Inc.
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
#
"""Defines the abstract generator."""
import datetime
import os
from abc import ABC
from abc import abstractmethod
from pprint import pformat

from faker import Faker
from jinja2 import Environment
from jinja2 import FunctionLoader
from nise.jinja_ext import faker_passthrough
from nise.util import deepupdate
from nise.util import load_yaml
from nise.util import LOG


REPORT_TYPE = "report_type"


class AbstractGenerator(ABC):
    """Defines a abstract class for generators."""

    fake = Faker()

    # Jinja template filename defined by each generator
    TEMPLATE = None

    # keyword args passed to TEMPLATE
    TEMPLATE_KWARGS = None

    def __init__(self, start_date, end_date, user_config=None):
        """Initialize the generator."""
        if not self.TEMPLATE:
            raise AttributeError("Class attribute 'TEMPLATE' must be defined.")

        if not self.TEMPLATE_KWARGS:
            raise AttributeError("Class attribute 'TEMPLATE_KWARGS' must be defined.")

        # XXX: temporary conditional until all generators support using the jinja templating
        if not self.TEMPLATE_KWARGS.get("NotImplemented"):
            env = Environment(loader=FunctionLoader(self.load_template))
            env.globals["faker"] = faker_passthrough

            default_template = env.get_template(self.TEMPLATE)
            if user_config:
                user_template = env.get_template(user_config)
                user_config = load_yaml(user_template.render(**self.TEMPLATE_KWARGS))
                default_config = load_yaml(default_template.render(**self.TEMPLATE_KWARGS))
                config = deepupdate(default_config, user_config)  # merge user-supplied static file with base template
            else:
                config = load_yaml(default_template.render(**self.TEMPLATE_KWARGS))

            # remove top-level class name
            self.config = []
            for generators in config.get("generators"):
                for key, val in generators.items():
                    if key == type(self).__name__:
                        self.config.append(val)

            LOG.debug("Current config: %s", pformat(self.config))

        self.start_date = start_date
        self.end_date = end_date
        self.hours = self._set_hours()
        self.days = self._set_days()

        super().__init__()

    def _set_hours(self):
        """Create a list of hours between the start and end dates for hourly aws data."""
        hours = []
        if not self.start_date or not self.end_date:
            raise ValueError("start_date and end_date must be date objects.")
        if not isinstance(self.start_date, datetime.datetime):
            raise ValueError("start_date must be a date object.")
        if not isinstance(self.end_date, datetime.datetime):
            raise ValueError("end_date must be a date object.")
        if self.end_date < self.start_date:
            raise ValueError("start_date must be a date object less than end_date.")

        one_hour = datetime.timedelta(minutes=60)
        cur_date = self.start_date
        while (cur_date + one_hour) <= self.end_date:
            cur_hours = {"start": cur_date, "end": cur_date + one_hour}
            hours.append(cur_hours)
            cur_date = cur_date + one_hour
        return hours

    def _set_days(self):
        """Create a list of days between the start and end dates for daily azure data."""
        days = []
        if not self.start_date or not self.end_date:
            raise ValueError("start_date and end_date must be date objects.")
        if not isinstance(self.start_date, datetime.datetime):
            raise ValueError("start_date must be a date object.")
        if not isinstance(self.end_date, datetime.datetime):
            raise ValueError("end_date must be a date object.")
        if self.end_date < self.start_date:
            raise ValueError("start_date must be a date object less than end_date.")

        one_day = datetime.timedelta(hours=24)
        cur_date = self.start_date
        while (cur_date + one_day) <= self.end_date:
            cur_days = {"start": cur_date, "end": cur_date + one_day}
            days.append(cur_days)
            cur_date = cur_date + one_day
        return days

    @staticmethod
    def next_month(in_date):
        """Return the first of the next month from the in_date."""
        dt_first = in_date.replace(day=1)
        dt_up_month = dt_first + datetime.timedelta(days=32)
        dt_next_month = dt_up_month.replace(day=1)
        return dt_next_month

    @abstractmethod
    def _init_data_row(self, start, end, **kwargs):
        """Create a row of data with placeholder for all headers."""

    @abstractmethod
    def _add_common_usage_info(self, row, start, end, **kwargs):
        """Add common usage information."""

    @abstractmethod
    def _update_data(self, row, start, end, **kwargs):
        """Update data with generator specific data."""

    @abstractmethod
    def _generate_hourly_data(self, **kwargs):
        """Create hourly data."""

    @abstractmethod
    def generate_data(self, report_type=None):
        """Responsible for generating data."""

    def load_template(self, name):
        """Responsible for loading the Jinja template."""
        template = None
        if os.path.exists(name):
            try:
                with open(name, "r") as fh:
                    template = fh.read()
            except (IOError, OSError, TypeError) as exc:
                LOG.error(exc)
        return template

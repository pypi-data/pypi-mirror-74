# Copyright 2018 - Nokia
#
# Licensed under the Apache License, Version 2.0 (the "License"); you may
# not use this file except in compliance with the License. You may obtain
# a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations
# under the License.
from oslo_utils import importutils as utils

from vitrage.common.constants import DatasourceOpts as DSOpts
from vitrage.common.constants import UpdateMethod
from vitrage.utils import opt_exists

drivers = {}


# noinspection PyProtectedMember
def get_drivers_by_name(conf, driver_names):
    for d_name in driver_names:
        if not drivers.get(d_name):
            drivers[d_name] = utils.import_object(conf[d_name].driver, conf)
            drivers[d_name].__class__._datasource_name = d_name
    return [drivers[d_name] for d_name in driver_names]


def get_pull_drivers_names(conf):
    return [name for name in conf.datasources.types
            if conf[name].update_method.lower() == UpdateMethod.PULL
            and opt_exists(conf[name], DSOpts.CHANGES_INTERVAL)]


def get_push_drivers_names(conf):
    return [name for name in conf.datasources.types
            if conf[name].update_method.lower() == UpdateMethod.PUSH]


def get_driver_class(conf, driver_name):
    return utils.import_class(conf[driver_name].driver)

# Copyright 2017 - Nokia
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

from vitrage.cli import VITRAGE_TITLE
from vitrage import service
from vitrage import storage


def dbsync():
    print(VITRAGE_TITLE)
    conf = service.prepare_service()
    storage.get_connection_from_config(conf).upgrade()


def purge_data():
    print(VITRAGE_TITLE)
    conf = service.prepare_service()
    db = storage.get_connection_from_config(conf)
    db.active_actions.delete()
    db.events.delete()
    db.graph_snapshots.delete()
    db.changes.delete()
    db.edges.delete()
    db.alarms.delete()

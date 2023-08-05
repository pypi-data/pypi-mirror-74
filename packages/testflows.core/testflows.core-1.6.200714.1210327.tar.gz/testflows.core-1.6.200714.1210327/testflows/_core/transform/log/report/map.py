# Copyright 2020 Katteli Inc.
# TestFlows.com Open-Source Software Testing Framework (http://testflows.com)
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
from testflows._core.transform.log import message

def process_test(msg, maps):
    maps["top"] = msg.map

processors = {
    message.RawTest: process_test,
}

def transform(maps, stop_event):
    """Transform parsed log line into a map.
    """
    line = None
    while True:
        if line is not None:
            processor = processors.get(type(line), None)
            if processor:
                processor(line, maps)
                stop_event.set()

        line = yield line

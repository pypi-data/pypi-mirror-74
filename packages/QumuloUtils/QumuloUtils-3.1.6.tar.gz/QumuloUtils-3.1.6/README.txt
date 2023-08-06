# Copyright (c) 2019 Qumulo, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License"); you may not
# use this file except in compliance with the License. You may obtain a copy of
# the License at http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations under
# the License.

Qumulo Benchmark API

This class was written to assist in benchmarking performance utilizing the Qumulo
Scalable Filesystem (QSFS). 

There are a number of routines within this class that alleviate the overhead with
using the Qumulo API and make it easier to benchmark their cluster.

Some of the routines include:

- Clear Cache - Clearing the cache on the cluster.
- Cluster Info - Get model, version, name, and node count of the cluster.
- Cluster IPs - Get the IP addresses in use by the cluster.
- Cluster Rebuilding - Discover if the cluster is currently rebuilding a failed disk or node.

NOTE: This API requires at least Python 2.7 and has not yet been tested under Python 3.

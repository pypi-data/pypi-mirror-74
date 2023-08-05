# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2018-2019 Fetch.AI Limited
#
#   Licensed under the Apache License, Version 2.0 (the "License");
#   you may not use this file except in compliance with the License.
#   You may obtain a copy of the License at
#
#       http://www.apache.org/licenses/LICENSE-2.0
#
#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS,
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#   See the License for the specific language governing permissions and
#   limitations under the License.
#
# ------------------------------------------------------------------------------
"""The tests module contains the tests of the gym example."""

import os
import sys
from pathlib import Path

from tests.common.pexpect_popen import PexpectWrapper
from tests.common.utils import run_in_root_dir


@run_in_root_dir
def test_gym_ex():
    """Run the gym ex sequence."""
    try:
        process = PexpectWrapper(  # nosec
            [
                sys.executable,
                str(Path("examples/gym_ex/train.py").resolve()),
                "--nb-steps",
                "50",
            ],
            env=os.environ.copy(),
            maxread=1,
            encoding="utf-8",
            logfile=sys.stdout,
        )

        process.expect(["Step 50/50"], timeout=10)
        process.wait_to_complete(5)
        assert process.returncode == 0, "Test failed"
    finally:
        process.terminate()
        process.wait()

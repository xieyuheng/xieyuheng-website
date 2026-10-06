#!/usr/bin/env bash

set -e

# stage1 -- js/ts code

# format
./scripts/run-in.sh xieyuheng-web.js format.sh

# type check
./scripts/run-in.sh xieyuheng-web.js check.sh

# production build
./scripts/run-in.sh xieyuheng-web.js clean.sh build.sh

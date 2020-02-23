#!/usr/bin/env bash

set -e

echo Checking prop type changes against d.ts files...

if [ \"$agentType\" = \"pullrequest\" ]
  then
    echo breaking build
    echo agentType: $agentType
    exit 1
  else
    echo not breaking build - not a PR
fi

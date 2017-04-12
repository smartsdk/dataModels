#!/bin/sh

# Tests script

testUserContext()
{
  # Check that running with a short help flag results in a non-error exit code
  ../validate.sh ../common-schema.json ../OpenHealthContext/Questionnaire/schema.json
  result=$?
  assertEquals "xeno daemon with -h should exit with code 0" 0 ${result}

}

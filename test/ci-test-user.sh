#!/bin/sh

# Tests the User datamodels

testAlert()
{
   result=`ajv compile --v5 -s User/Alert/schema.json -r common-schema.json -r geometry-schema.json`
   assertEquals "schema User/Alert/schema.json is valid" "${result}"
   result=`ajv test --v5 -s User/Alert/schema.json -r common-schema.json -r geometry-schema.json -d User/Alert/example.json --valid`
   assertEquals "User/Alert/example.json passed test" "${result}"
}

# load shunit2
. shunit2

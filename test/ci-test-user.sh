#!/bin/sh

# Tests the User datamodels

testAlert()
{
   result=`ajv compile --v5 -s User/Alert/schema.json -r common-schema.json -r geometry-schema.json`
   assertEquals "schema User/Alert/schema.json is valid" "${result}"
   result=`ajv test --v5 -s User/Alert/schema.json -r common-schema.json -r geometry-schema.json -d User/Alert/example-1.json --valid`
   assertEquals "User/Alert/example-1.json passed test" "${result}"
   result=`ajv test --v5 -s User/Alert/schema.json -r common-schema.json -r geometry-schema.json -d User/Alert/example-2.json --valid`
   assertEquals "User/Alert/example-2.json passed test" "${result}"
}

testActivity()
{
   result=`ajv compile --v5 -s User/Activity/schema.json -r common-schema.json -r geometry-schema.json`
   assertEquals "schema User/Activity/schema.json is valid" "${result}"
   result=`ajv test --v5 -s User/Activity/schema.json -r common-schema.json -r geometry-schema.json -d User/Activity/example.json --valid`
   assertEquals "User/Activity/example.json passed test" "${result}"
}

testUserContext()
{
   result=`ajv compile --v5 -s User/UserContext/schema.json -r common-schema.json -r geometry-schema.json`
   assertEquals "schema User/UserContext/schema.json is valid" "${result}"
   result=`ajv test --v5 -s User/UserContext/schema.json -r common-schema.json -r geometry-schema.json -d User/UserContext/example.json --valid`
   assertEquals "User/UserContext/example.json passed test" "${result}"
}

# load shunit2
. shunit2

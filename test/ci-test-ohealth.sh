#!/bin/sh

# Test OpenHealthContext models

testClinicalControl(){
   result=`ajv compile --v5 -s OpenHealthContext/ClinicalControl/schema.json -r common-schema.json -r geometry-schema.json`
   assertEquals "schema OpenHealthContext/ClinicalControl/schema.json is valid" "${result}"
   result=`ajv test --v5 -s OpenHealthContext/ClinicalControl/schema.json -r common-schema.json -r geometry-schema.json -d OpenHealthContext/ClinicalControl/example.json --valid`
   assertEquals "OpenHealthContext/ClinicalControl/example.json passed test" "${result}"
}

testPhysicalTest()
{
  result=`ajv compile --v5 -s OpenHealthContext/PhysicalTest/schema.json -r common-schema.json -r geometry-schema.json`
  assertEquals "schema OpenHealthContext/PhysicalTest/schema.json is valid" "${result}"
  result=`ajv test --v5 -s OpenHealthContext/PhysicalTest/schema.json -r common-schema.json -r geometry-schema.json -d OpenHealthContext/PhysicalTest/example.json --valid`
  assertEquals "OpenHealthContext/PhysicalTest/example.json passed test" "${result}"
}

testQuestionnaire()
{
  result=`ajv compile --v5 -s OpenHealthContext/Questionnaire/schema.json -r common-schema.json -r geometry-schema.json`
  assertEquals "schema OpenHealthContext/Questionnaire/schema.json is valid" "${result}"
  result=`ajv test --v5 -s OpenHealthContext/Questionnaire/schema.json -r common-schema.json -r geometry-schema.json -d OpenHealthContext/Questionnaire/example.json --valid`
  assertEquals "OpenHealthContext/Questionnaire/example.json passed test" "${result}"
}

testQuestionnaireQuestion()
{
  result=`ajv compile --v5 -s OpenHealthContext/Questionnaire/Question/schema.json -r common-schema.json -r geometry-schema.json`
  assertEquals "schema OpenHealthContext/Questionnaire/Question/schema.json is valid" "${result}"
  result=`ajv test --v5 -s OpenHealthContext/Questionnaire/Question/schema.json -r common-schema.json -r geometry-schema.json -d OpenHealthContext/Questionnaire/Question/example.json --valid`
  assertEquals "OpenHealthContext/Questionnaire/Question/example.json passed test" "${result}"
}

testQuestionnaireAnswer()
{
  result=`ajv compile --v5 -s OpenHealthContext/Questionnaire/Answer/schema.json -r common-schema.json -r geometry-schema.json`
  assertEquals "schema OpenHealthContext/Questionnaire/schema.json is valid" "${result}"
  result=`ajv test --v5 -s OpenHealthContext/Questionnaire/Answer/schema.json -r common-schema.json -r geometry-schema.json -d OpenHealthContext/Questionnaire/Answer/example.json --valid`
  assertEquals "OpenHealthContext/Questionnaire/Answer/example.json passed test" "${result}"
}


# load shunit2
. shunit2

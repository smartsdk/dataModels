# Questionnaire

## Data Model

A JSON Schema corresponding to this data model can be found [here](../schema.json).

+ `id` : Unique identifier.
    + Mandatory.

+ `type` : Entity type. It must be equal to `Questionnaire`.
    + Mandatory.

+ `questionnaireType` : Unique value to contextualize a test.
    + Attribute type: `string`.
    + Allowed values: The parameter is open to any descriptor that might bring a significant meaning. However, in the scope of health, follow descriptors are recommended: `Timed Up and Go`, `30 second sit to stand test`, `4-Stage Balance Test`.
    + Mandatory.

+ `refQuestion` : List of questions included into the questionnaire.
    + Attribute type: [Question](https://smartsdk.github.io/dataModels/OpenHealthContext/Questionnaire/Question/schema.json).
    + Mandatory.

+ `description` : A brief description regarding the purpose of the questionnaire.
    + Attribute type: `string`.
    + Mandatory.

+ `dateModified` : Last entity's update timestamp.
    + Attribute type: [DateTime](https://schema.org/DateTime).
    + Mandatory.

## Examples of use

```
{
  "id": "ffffffffff9cbbf4465f0ef30033c587-questionnaire-7118",
  "type": "Questionnaire",
  "questionnaireType": "Timed Up and Go",
  "refQuestion": ["ffffffffff9cbbf4465f0ef30033c587-question-7118", "ffffffffff9cbbf4465f0ef30033c587-question-7119", "ffffffffff9cbbf4465f0ef30033c587-question-7120"],
  "description": "Simple test used to assess a person's mobility.",
  "dateModified": "2017-01-18T20:45:42.697Z"
}
```

## Use it with a real service

T.B.D.

## Open Issues

T.B.A.

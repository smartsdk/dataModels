# Question

## Data Model

A JSON Schema corresponding to this data model can be found [here](../schema.json).

+ `id` : Unique identifier.
    + Mandatory.

+ `type` : Entity type. It must be equal to `Question`.
    + Mandatory.

+ `refQuestionnaire` : Reference to a questionnaire.
    + Attribute type: `string`.
    + Mandatory.

+ `category` : A unique category value to specify the domain of the question.
    + Attribute type: `string`
    + Allowed value: (`health`). Please note that other option values can be included.
    + Mandatory.

+ `value` : A single question written to provide specific information.
    + Attribute type: `string`.
    + Mandatory

+ `language` : Language in which the questions is written.
    + Attribute type: `string`.
    + Allowed values: (`eng`, `es`, and those included into the ISO: 639-4:2010).
    + Mandatory.

+ `dateModified` : Last entity's update timestamp.
    + Attribute type: [DateTime](https://schema.org/DateTime).
    + Mandatory.

## Examples of use

```
{
  "id": "ffffffffff9cbbf4465f0ef30033c587-question-7118",
  "type": "Question",
  "category": "health",
  "refQuestionnaire": "ffffffffff9cbbf4465f0ef30033c587-questionnaire-7118",
  "value": "Did the participant require physical assistance to perform the test?",
  "language": "en",
  "dateModified": "2017-01-18T20:45:42.697Z"
}
```

## Use it with a real service

T.B.D.

## Open Issues

T.B.A.

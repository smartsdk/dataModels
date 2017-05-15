# MotorPhysicalTest

## Data Model

A JSON Schema corresponding to this data model can be found [here](../schema.json).

+ `id` : Entity's unique identifier which must follow a specific format (i.e., \<DEVICE UNIQUE ID\>-\<TEST NUMBER\>; without blank spaces in between).
   + Attribute type: [Identifier](https://fiware.github.io/dataModels/common-schema.json#/definitions/EntityIdentifierType).
   + Mandatory.

+ `type` : Entity type. It must be equal to `MotorPhysicalTest`.
   + Attribute type: [Text](https://schema.org/Text).
   + Mandatory.

+ `testType` : Name of physical test.
   + Attribute type: [Text](https://schema.org/Text).
   + Allowed values: One of the following of any other meaningful to the application.
      + `Timed Up and Go`, `30 second sit to stand test`, `4-Stage Balance Test`.
   + Mandatory.

+ `subCategoryTestType` : This field helpd to specify testType value, by allowing to provide a specific subcategory if needed.
   + Attribute type: [Text](https://schema.org/Text).
   + Allowed values: One of the following of any other meaningful to the application.
      + `Side by Side`, `Semi-Tandem`, `Tandem (Full)`, `Single-Leg Stance`.
   + Optional.

+ `refUser` : A sigle reference to the actual User entity.
   + Attribute type: [Text](https://schema.org/Text).
   + Mandatory.

+ `refMultisensoryDevice` : List of references to multi-sensory device instances; which consist on a collection of sensors.
   + Attribute type: [MultisensoryDevice](../../../Sensor/MultisensoryDevice/doc/spec.md).
   + Mandatory.

+ `configuration` : Description to enrich provided information along the `MultisensoryDevice` references. This attribute is intended to be a dictionary of properties which capture parameters related with the test's design.
    + Attribute type: [StructuredValue](https://schema.org/StructuredValue).
    + Optional.

+ `dateTestStarted` : Timestamp to denotes when the test started.
   + Attribute type: [DateTime](https://schema.org/DateTime).
   + Mandatory.

+ `dateTestEnded` : Timestamp to denotes when the test ended.
   + Attribute type: [DateTime](https://schema.org/DateTime).
   + Mandatory.



## Examples of use
### Creation of MotorPhysicalTest entity

```
{  
  "id": "ffffffffff9cbbf4465f0ef30033c587-7118",
  "type": "MotorPhysicalTest",
  "testType": "Timed Up and Go",
  "refUser": "http://207.249.127.162:1234/users/1",
  "refMultisensoryDevice": [
                              "device-9845A", 
                              "device-9845B", 
                              "device-9845C"
                            ],
  "configuration": {
    "relationship": "device-limbs",
    "data":[
      {
        "device": "device-9845A",
        "position": "right-leg"
      },
      {
        "device": "device-9845B",
        "position": "left-leg"
      },
      {
        "device": "device-9845C",
        "position": "lower-back"
      }
    ]
  },
  "dateTestStarted": "2017-01-18T20:45:58.447Z",
  "dateTestEnded": "2017-01-18T20:45:42.697Z"
}
```

## Use it with a real service

T.B.D.

## Open Issues

T.B.A.

# Building Operation

## Description

This entity contains a harmonised description of a generic operation (related
to smart buildings) applied to the referenced building. The building operation
contains dynamic data reported by, or associated with a building or operations
applicable to the building. This entity is associated with the vertical segments
of smart homes, smart cities, industry and related IoT applications.

This data model has been partially developed in cooperation with mobile
operators and the [GSMA](http://www.gsma.com/connectedliving/iot-big-data/).

## Data Model

+ `id` : Unique identifier. 

+ `type` : Entity type. It must be equal to `BuildingOperation`.

+ `dateModified` : Last update timestamp of this entity.
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Optional

+ `dateCreated` : Entity's creation timestamp.
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Optional    

+ `description` : A description of the operation performed. 
    + Attribute type: [Text](https://schema.org/Text)
    + Normative References: [https://schema.org/description](https://schema.org/description)
    + Optional

+ `refBuilding` : A reference to the building where the operation is performed.
    + Attribute type: A references to an entity of type
      BuildingType.
    + Required

+ `refOperator` : A reference to the operator.
    + Attribute type: A reference to [Person](http://schema.org/Person)
      or [Organization](https://schema.org/Organization) executing the operation.
    + Required

+ `operationType` : The type of operation associated with the current
    operation.
    + Attribute type: [Text](https://schema.org/Text)
    + Optional

+ `result` : The final result of the operation.
    + Attribute type: [Text](https://schema.org/Text)
    + Allowed values, one of the following:
      + `ok`
      + `aborted`
    + Optional

+ `plannedStartDate` : The planned start date for the operation..
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Required 

+ `plannedEndDate` : The planned end date for the operation..
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Required 

+ `actualStartDate` : The actual start date for the operation.
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Optional 

+ `actualEndDate` : The actual end date for the operation.
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Optional 

+ `result` : The current status of the operation.
    + Attribute type: [Text](https://schema.org/Text)
    + Allowed values, one of the following:
      + `planned`
      + `ongoing`
      + `finished`
      + `scheduled`
      + `cancelled`
    + Optional

+ `operationSequence` : The sequence of actions executed by the operation.
    + Attribute type: [Text](https://schema.org/Text)
    + Allowed values, one of the following:
      + `planned`
      + `ongoing`
      + `finished`
      + `scheduled`
      + `cancelled`
    + Optional

+ `refRelatedBuildingOperation` : Operations related to the current operation.
    + Attribute type: A list of references to an entity of type
      BuildingOperation.

+ `refRelatedDeviceOperation` : Devices related to the current operation.
    + Attribute type: A list of references to an entity of type
      Device.

**Note**: JSON Schemas only capture the NGSI simplified representation, this
means that to test the JSON schema examples with
a [FIWARE NGSI version 2](http://fiware.github.io/specifications/ngsiv2/stable)
API implementation, you need to use the `keyValues`
mode (`options=keyValues`).

## Examples

```
{
  "id": "57b912ab-eb47-4cd5-bc9d-73abece1f1b3",
  "type": "BuildingOperation",
  "dateCreated": "2016-08-08T10:18:16Z",
  "dateModified": "2016-08-08T10:18:16Z",
  "source":  "http://www.example.com",
  "dataProvider": "OperatorA",
  "refBuilding": "building-a85e3da145c1",
  "operationType": "airConditioning",
  "description": "Air conditioning levels reduced due to out of hours",
  "result": "ok",
  "plannedStartDate": "2016-08-08T10:18:16Z",
  "plannedEndDate": "2016-08-20T10:18:16Z",
  "actualStartDate": "2016-08-08T10:18:16Z",
  "actualEndDate": "2016-08-20T10:18:16Z",
  "status": "finished",
  "operationSequence": [
    {
      "index": 1,
      "action": "fan_power=0"
    },
    {
      "index": 2,
      "action": "set_temperature=24"
    }
  ],
  "refRelatedBuildingOperation": [
    "b4fb8bff-1a8f-455f-8cc0-ca43c069f865",
    "55c24793-3437-4157-9bda-667c9e1531fc"
  ],
  "refRelatedDeviceOperation": [
    "36744245-6716-4a28-84c7-0e3d7520f143",
    "33b2b713-9223-40a5-87a0-3f80a1264a6c"
  ]
}
```

## Test it with a real service

T.B.D.

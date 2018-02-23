# Building Type

## Description

This entity contains a harmonised description of a Building Type. This entity is 
associated with the vertical segments of smart homes, smart cities, industry and
related IoT applications.

This data model has been partially developed in cooperation with mobile
operators and the [GSMA](http://www.gsma.com/connectedliving/iot-big-data/).

## Data Model

+ `id` : Unique identifier. 

+ `type` : Entity type. It must be equal to `BuildingType`.

+ `dateModified` : Last update timestamp of this entity.
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Optional

+ `dateCreated` : Entity's creation timestamp.
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Optional    

+ `name` : The name of this BuildingType.
    + Attribute type: [Text](https://schema.org/Text)
    + Normative References: [name](https://schema.org/name)
    + Optional

+ `description` : Description about the building type. 
    + Attribute type: [Text](https://schema.org/Text)
    + Normative References: [https://schema.org/description](https://schema.org/description)
    + Optional

+ `root` : A logical indicator that this is the root of a BuildingType hierarchy.
    + Attribute type: [Boolean](http://schema.org/Boolean)
    + Optional

+ `refBuildingType` : The set of building types to which this building type
    belongs.
    + Attribute type: List of references to an entity of type
      BuildingType.
    + Optional

**Note**: JSON Schemas only capture the NGSI simplified representation, this
means that to test the JSON schema examples with
a [FIWARE NGSI version 2](http://fiware.github.io/specifications/ngsiv2/stable)
API implementation, you need to use the `keyValues`
mode (`options=keyValues`).

## Examples

```
{
  "id": "buildingType-224182bb3b9f",
  "type": "BuildingType",
  "dateCreated": "2016-08-08T10:18:16Z",
  "dateModified": "2016-08-08T10:18:16Z",
  "source":  "http://www.example.com",
  "dataProvider": "OperatorA",
  "name": "Office",
  "description": "Standard building type definition for a office",
  "root": true,
  "refParentType": [
    "buildingType-6b4e6232b734",
    "buildingType-22e874c35180"
  ]
}
```

## Test it with a real service

T.B.D.

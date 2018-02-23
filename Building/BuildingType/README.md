# Building Type

This entity contains a harmonised description of a Building Type. This entity is 
associated with the vertical segments of smart homes, smart cities, industry and
related IoT applications.

**Note**: JSON Schemas only capture the NGSI simplified representation, this
means that to test the JSON schema examples with
a [FIWARE NGSI version 2](http://fiware.github.io/specifications/ngsiv2/stable)
API implementation, you need to use the `keyValues`
mode (`options=keyValues`).

## Examples of use

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
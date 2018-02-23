# Building

## Description

This entity contains a harmonised description of a Building. This entity is 
associated with the vertical segments of smart homes, smart cities, industry and
related IoT applications.

This data model has been partially developed in cooperation with mobile
operators and the [GSMA](http://www.gsma.com/connectedliving/iot-big-data/).

## Data Model

+ `id` : Unique identifier. 

+ `type` : Entity type. It must be equal to `Building`.

+ `dateModified` : Last update timestamp of this entity.
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Optional

+ `dateCreated` : Entity's creation timestamp.
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Optional

+ `owner` : The owners of a Building.
    + Attribute type: List of references to [Person](http://schema.org/Person)
      or [Organization](https://schema.org/Organization).
    + Optional

+ `refBuildingType` : The building's type.
    + Attribute type: Reference to an entity of type
      [BuildingType](../../BuildingType/doc/spec.md).
    + Required

+ `category` : One or more categories relevant to the building with choices
    based on [OpenStreetMap](http://wiki.openstreetmap.org/wiki/Map_Features#Building).
    Optional but recommended to optimize queries.
    + Allowed values, one of the following or any other meaningful to the application:
      + `apartments`
      + `farm`
      + `hotel`
      + `house`
      + `detached`
      + `residential`
      + `dormitory`
      + `terrace`
      + `houseboat`
      + `bungalow`
      + `static_caravan`
      + `commercial`
      + `office`
      + `industrial`
      + `retail`
      + `warehouse`
      + `kiosk`
      + `bakehouse`
      + `cathedral`
      + `chapel`
      + `church`
      + `kindergarten`
      + `mosque`
      + `temple`
      + `synagogue`
      + `shrine`
      + `civic`
      + `hospital`
      + `school`
      + `stadium`
      + `train_station`
      + `transportation`
      + `university`
      + `grandstand`
      + `public`
      + `barn`
      + `bridge`
      + `bunker`
      + `cabin`
      + `carport`
      + `conservatory`
      + `construction`
      + `cowshed`
      + `digester`
      + `farm_auxiliary`
      + `garage`
      + `garages`
      + `garbage_shed`
      + `greenhouse`
      + `hangar`
      + `hut`
      + `pavilion`
      + `parking`
      + `riding_hall`
      + `roof`
      + `shed`
      + `stable`
      + `sty`
      + `transformer_tower`
      + `service`
      + `ruins`
      + `water_tower`
    + Optional

+ `location` : The geo:json encoded polygon of this building.. 
    + Attribute type: `geo:json`.
    + Normative References: [https://tools.ietf.org/html/rfc7946](https://tools.ietf.org/html/rfc7946)
    + Optional.

+ `containedInPlace` : he geo:json encoded polygon of the building plot in which
    this building sits.
    + Attribute type: `geo:json`.
    + Normative References: [https://tools.ietf.org/html/rfc7946](https://tools.ietf.org/html/rfc7946)
    + Optional.

+ `address` : Civic address where the building is located. 
    + Normative References: [https://schema.org/address](https://schema.org/address)
    + Required
 
+ `description` : Description about the building. 
    + Normative References: [https://schema.org/description](https://schema.org/description)
    + Optional

+ `occupier` : The occupiers of a Building.
    + Attribute type: List of references to [Person](http://schema.org/Person)
      or [Organization](https://schema.org/Organization).
    + Optional

+ `floorsAboveGround` : The number of floors above ground level in this building.
    + Attribute type: [Number](http://schema.org/Number)
    + Optional

+ `floorsBelowGround` : The number of floors below ground level in this building.
    + Attribute type: [Number](http://schema.org/Number)
    + Optional

+ `refMap` : Reference to a map.
    + Attribute type: Reference to a Map expressed as [URL](http://schema.org/URL)
    + Optional

+ `openingHours` : The number of floors above ground level in this building.
    + Attribute type: List of [Opening Hours](http://schema.org/openingHours)
    + Optional

**Note**: JSON Schemas only capture the NGSI simplified representation, this
means that to test the JSON schema examples with
a [FIWARE NGSI version 2](http://fiware.github.io/specifications/ngsiv2/stable)
API implementation, you need to use the `keyValues`
mode (`options=keyValues`).

## Examples

```
{
  "id": "building-a85e3da145c1",
  "type": "Building",
  "dateCreated": "2016-08-08T10:18:16Z",
  "dateModified": "2016-08-08T10:18:16Z",
  "source": "http://www.example.com",
  "dataProvider": "OperatorA",
  "refBuildingType": "buildingType-224182bb3b9f",
  "category": [
    "office"
  ],
  "containedInPlace": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          100,
          0
        ],
        [
          101,
          0
        ],
        [
          101,
          1
        ],
        [
          100,
          1
        ],
        [
          100,
          0
        ]
      ]
    ]
  },
  "location": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          100,
          0
        ],
        [
          101,
          0
        ],
        [
          101,
          1
        ],
        [
          100,
          1
        ],
        [
          100,
          0
        ]
      ]
    ]
  },
  "address": {
    "addressLocality": "London",
    "postalCode": "EC4N 8AF",
    "streetAddress": "25 Walbrook"
  },
  "owner": [
    "cdfd9cb8-ae2b-47cb-a43a-b9767ffd5c84",
    "1be9cd61-ef59-421f-a326-4b6c84411ad4"
  ],
  "occupier": [
    "9830f692-7677-11e6-838b-4f9fb3dc5a4f"
  ],
  "floorsAboveGround": 7,
  "floorsBelowGround": 0,
  "description": "Office block",
  "mapUrl": "http://www.example.com",
  "openingHours": [
    {
      "closes": "17:00:00",
      "dayOfWeek": "http://schema.org/Sunday",
      "opens": "09:00:00"
    },
    {
      "closes": "17:00:00",
      "dayOfWeek": "http://schema.org/Saturday",
      "opens": "09:00:00"
    },
    {
      "closes": "17:00:00",
      "dayOfWeek": "http://schema.org/Thursday",
      "opens": "09:00:00"
    },
    {
      "closes": "17:00:00",
      "dayOfWeek": "http://schema.org/Tuesday",
      "opens": "09:00:00"
    },
    {
      "closes": "17:00:00",
      "dayOfWeek": "http://schema.org/Friday",
      "opens": "09:00:00"
    },
    {
      "closes": "17:00:00",
      "dayOfWeek": "http://schema.org/Monday",
      "opens": "09:00:00"
    },
    {
      "closes": "17:00:00",
      "dayOfWeek": "http://schema.org/Wednesday",
      "opens": "09:00:00"
    }
  ]
}
```

## Test it with a real service

T.B.D.

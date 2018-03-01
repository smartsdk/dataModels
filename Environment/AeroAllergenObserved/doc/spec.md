# Aero Allergen Observed

## Description
This entity models aero allergens observed at a given location and
  related overall allergen risk.

This data model has been developed based on [GSMA](http://www.gsma.com/connectedliving/iot-big-data/). 

## Data Model

A JSON Schema corresponding to this data model can be found [here](http://fiware.github.io/dataModels/Environment/AeroAllergenObserved/schema.json).

+ `id` : Unique identifier. 

+ `type` : Entity type. It must be equal to `AeroAllergenObserved`.

+ `dateModified` : Last update timestamp of this entity.
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Optional

+ `dateCreated` : Entity's creation timestamp.
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Optional    

+ `location` : Location of the aero allergens observation represented by a GeoJSON geometry. 
    + Attribute type: `geo:json`.
    + Normative References: [https://tools.ietf.org/html/rfc7946](https://tools.ietf.org/html/rfc7946)
    + Mandatory if `address` is not defined. 
    
+ `address` : Civic address of the aero allergens observation. Sometimes it corresponds to the aero allergens station address.
    + Normative References: [https://schema.org/address](https://schema.org/address)
    + Mandatory if `location` is not present. 
    
+ `dateObserved` : The date and time of this observation in ISO8601 UTCformat. It can be represented by an specific time instant or by an ISO8601 interval. 
    + Attribute type: [DateTime](https://schema.org/DateTime) or an ISO8601 interval represented as [Text](https://schema.org/Text). 
    + Mandatory
    
+ `source` : A sequence of characters giving the source of the entity data.
    + Attribute type: [Text](https://schema.org/Text) or [URL](https://schema.org/URL)
    + Optional
    
+ `allergenRisk` : Overall allergen risk corresponding to the aero allergens observed.
    + Attribute type: [Text](https://schema.org/Text)
    + Example values defined by the [European Aeroallergen Network](https://www.ean-net.org/en/):
  (`none`, `low`, `moderate`, `high`, `very high`).
  As this can be different between countries, regulations or implementations, the set of allowed values will depend on the reference specification used.
  It is recommended that implementations use the same naming conventions as exemplified above (lower case starting words, camel case when compound terms are used)
    + Attribute metadata:
        + `referenceSpecification` : Specification that must be taken as reference when interpreting the supplied qualitative value. 
            + Type: [Text](https://schema.org/Text) or [URL](https://schema.org/URL)
            + Mandatory
    + Optional
  
+ `refDevice` : A reference to the device(s) which captured this observation.
    + Attribute type: Reference to an entity of type `Device`
    + Optional

### Representing aero allergens concentration

In order to enable a proper management of the the different aero allergens concentration,
*for each* aero allergens we have to use an attribute that *MUST* refers exactly
to the conventional name of the allergen (usually the latin name of
the associated plant) concatenated with the string `Concentration`,
e.g. `alnusConcentration` to measure
the concentration (usually in grains per cubic meter) of 
[alder](https://en.wikipedia.org/wiki/Alder) pollen.

The structure of such an attribute will be as follows:

+ Attribute name: Equal to the name of the allergen plus the suffix `Level`, for instance `alnusConcentration`.

+ Attribute type: [Number](https://schema.org/Number)

+ Attribute value: corresponds to the concentration of the allergen as a number.

+ Attribute metadata:
    + `timestamp` : optional timestamp for the observed value in ISO8601 format.
        It can be omitted if the observation time is the same as the one captured by the `dateObserved` attribute at entity level.
        + Type: [DateTime](https://schema.org/DateTime)
    + `unitCode` : The unit code (text) of measured concentration (usually grains per cubic meter).
        + Type: [Text](https://schema.org/Text)
        + Optional
    + `description` : short description of the allergen
        + Type: [Text](https://schema.org/Text)
        + Optional

### Representing qualitative levels of aero allergens

In order to enable a proper management of the aero allergens qualitative levels,
*for each* aero allergens we have to use an attribute that *MUST* refers exactly
to the conventional name of the allergen (usually the latin name of
the associated plant) concatenated with the string `Level`,
e.g. `alnusLevel` to measure
the qualitative level for a given concentration of 
[alder](https://en.wikipedia.org/wiki/Alder) pollen.

+ Attribute name: Equal to the name of the allergen plus the suffix `Level`, for instance `alnusLevel`.
+ Attribute type: [Text](https://schema.org/Text)
+ Attribute value: Example values defined by the [European Aeroallergen Network](https://www.ean-net.org/en/):
(`none`, `low`, `moderate`, `high`, `very high`).
  As this can be different between countries, regulations or implementations, the set of allowed values will depend on the reference specification used.
  It is recommended that implementations use the same naming conventions as exemplified above (lower case starting words, camel case when compound terms are used)
+ Attribute metadata:
    + `description` : short description of the measurand and its related qualitative level
        + Type: [Text](https://schema.org/Text)
        + Optional
    + `referenceSpecification` : Specification that must be taken as reference when interpreting the supplied qualitative value. 
        + Type: [Text](https://schema.org/Text) or [URL](https://schema.org/URL)
        + Mandatory

### Representing allergenicity category of aero allergens

In order to enable a proper management of the allergenicity category of aero allergens,
*for each* aero allergens we have to use an attribute that *MUST* refers exactly
to the conventional name of the allergen (usually the latin name of
the associated plant) concatenated with the string `Allergenicity`,
e.g. `alnusAllergenicity` to describe
the allergenicity level of 
[alder](https://en.wikipedia.org/wiki/Alder) pollen.

+ Attribute name: Equal to the name of the allergen plus the suffix `Allergenicity`, for instance `alnusAllergenicity`.
+ Attribute type: [Text](https://schema.org/Text)
+ Attribute value: Example values defined by the [Spanish Network for Aerobiology](https://www.uco.es/rea/infor_rea/interpretacion.html):
(`1`, `2`, `3`, `4`).
  As this can be different between countries, regulations or implementations, the set of allowed values will depend on the reference specification used.
  It is recommended that implementations use the same naming conventions as exemplified above (lower case starting words, camel case when compound terms are used)
+ Attribute metadata:
    + `description` : short description of the measurand and its related qualitative level
        + Type: [Text](https://schema.org/Text)
        + Optional
    + `referenceSpecification` : Specification that must be taken as reference when interpreting the supplied qualitative value. 
        + Type: [Text](https://schema.org/Text) or [URL](https://schema.org/URL)
        + Mandatory       

**Note**: JSON Schemas only capture the NGSI simplified representation, this means that to test the JSON schema examples with
a [FIWARE NGSI version 2](http://fiware.github.io/specifications/ngsiv2/stable) API implementation, you need to use the `keyValues`
mode (`options=keyValues`).
    
## Examples of use

```
{
  "id": "AeroAllergenObserved-CDMX-Pollen-Cuajimalpa",
  "type": "AeroAllergenObserved",
  "alnusLevel": "moderate",
  "alnusConcentration": 40,
  "alnusAllergenicity": "3",
  "casuarinaLevel": "low",
  "casuarinaConcentration": 1,
  "casuarinaAllergenicity": "3",
  "allergenRisk": "moderate",
  "address": {
    "addressCountry": "MX",
    "addressLocality": "Ciudad de México",
    "streetAddress": "Colegio Franco-Inglés"
  },
  "dateModified": "2018-02-16T17:24:39.00Z",
  "dateObserved": "2018-02-11T00:00:00.00Z",
  "location": {
    "type": "Point",
    "coordinates": [
      -99.276977,
      19.381877
    ]
  },
  "source": "http://rema.atmosfera.unam.mx/rema/"
}
```

## Use it with a real service

TBD

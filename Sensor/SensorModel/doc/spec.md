# SensorModel

## Description

This entity captures the static properties of a Sensor component. 

## Data Model

+ `id` : Unique identifier. 
    + Attribute type: [Identifier](https://fiware.github.io/dataModels/common-schema.json#/definitions/EntityIdentifierType).
    + Mandatory.

+ `type` : Entity type. It must be equal to `SensorModel`.
    + Attribute type: [Text](https://schema.org/Text).
    + Mandatory.

+ `name` : Name given to this sensor model.
    + Normative References: [https://schema.org/name](https://schema.org/name).
    + Mandatory.
    
+ `description` : Sensor's description.
    + Normative References: [description](https://schema.org/description).
    + Optional.

+ `category` : Sensor's category(ies).
    + Attribute type: [Text](https://schema.org/Text).
    + Allowed values: One of the following or any other meaningful to the application.
        + `motion` : Are useful for monitoring physical movement, such as tilt, shake, rotation, or swing. The movement is usually a reflection of direct user input, but it can also be a reflection of the physical environment in which the sensor is sitting. 
        [http://ontology.tno.nl/saref/#Sensor](http://ontology.tno.nl/saref/#Sensor).
    + Mandatory.

+ `classification` : Component description.
    + Attribute type: [Text](https://schema.org/Text).
    + Allowed values: One of the following of any other meaningful to the application.
        + `accelerometer`, `gyroscope`.

+ `controlledProperty` : Anything that can be sensed, measured or controlled by.
    + Attribute type: [Text](https://schema.org/Text).
    + Allowed values: (some of this values are defined as instances of the class `Property` in SAREF)
        + (`acceleration`, `orientation`).
    + Mandatory.

+ `function` :  The functionality necessary to accomplish the task for which a Sensor is designed.
    Defined by [SAREF](https://w3id.org/saref#Function).
    + Attribute type: List of [Text](https://schema.org/Text).
    + Allowed values: (`levelControl`, `sensing`, `onOff`, `openClose`, `metering`, `eventNotification`), from SAREF.
    + Optional.
  
+ `supportedUnits` : Units of measurement supported by the sensor.
    + Attribute type: List of [Text](https://schema.org/Text).
    + Allowed values: The unit code (text) of measurement given using the
        [UN/CEFACT Common Code](http://wiki.goodrelations-vocabulary.org/Documentation/UN/CEFACT_Common_Codes) (max. 3 characters).
    + Optional.

+ `brandName` : Sensor's brand name.
    + Attribute type: [Text](https://schema.org/Text).
    + See also: [https://schema.org/brand](https://schema.org/brand).
    + Mandatory.

+ `modelName` : Sensor's model name.
    + Attribute type: [Text](https://schema.org/Text).
    + See also: [https://schema.org/model](https://schema.org/model).
    + Mandatory.

+ `manufacturerName` : Sensor's manufacturer name.
    + Attribute type: [Text](https://schema.org/Text).
    + See also: [https://schema.org/model](https://schema.org/model).
    + Mandatory.

+ `documentation` : A link to sensor's documentation.
    + Attribute type: [URL](https://schema.org/URL).
    + Optional.

+ `image` : A link to an image depicting the concerned sensor.
    + Normative References: [https://schema.org/image](https://schema.org/image).
    + Optional.

+ `dateModified` : Last update timestamp of this entity.
    + Attribute type: [DateTime](https://schema.org/DateTime).
    + Optional.

+ `dateCreated` : Entity's creation timestamp.
    + Attribute type: [DateTime](https://schema.org/DateTime).
    + Optional.

## Examples

    {
      "id": "mySensor-sensor-345",
      "type": "SensorModel",
      "category": "motion",
      "classification": "accelerometer"
      "controlledProperty": "acceleration",
      "function": ["sensing"],
      "brandName": "mySensor",
      "modelName": "S4Container 345",
      "manufacturerName": "mySensor Inc.",
      "dateCreated": "2014-09-11",
    }

## Test it with a real service

T.B.D.

## Issues

T.B.D.

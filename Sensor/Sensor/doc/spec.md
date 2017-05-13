# Sensor

## Description

It represents a physical sensor intended to sense a particular category of data (e.g., acceleration, gyroscope, temperature, etc.). In this context, a Sensor is a tangible object which serve for a specific purpose and is producer and / or consumer of data. It can be considered as a single object, or as a part of a collection of sensors connected to a single communication mechanism, such as Smartphones or Smartwatches.


## Data Model

+ `id` : Unique identifier. 
    + Attribute type: [Identifier](https://fiware.github.io/dataModels/common-schema.json#/definitions/EntityIdentifierType).
    + Mandatory.

+ `type` : Entity type. It must be equal to `Sensor`.
    + Attribute type: [Text](https://schema.org/Text).
    + Mandatory.

+ `name` : A mnemonic name given to the sensor.
    + Normative References: [name](https://schema.org/name).
    + Optional.

+ `description` : Sensor's description.
    + Normative References: [description](https://schema.org/description).
    + Optional.

+ `category` : See attribute `category` from [SensorModel](../../SensorModel/doc/spec.md). 
    + Attribute type: [Text](https://schema.org/Text).
    + Optional.

+ `classification` : See attribute `classification` from [SensorModel](../../SensorModel/doc/spec.md). 
    + Attribute type: [Text](https://schema.org/Text).
    + Optional.
        
+ `controlledProperty` : See attribute `controlledProperty` from [SensorModel](../../SensorModel/doc/spec.md).
    + Attribute type: [Text](https://schema.org/Text).
    + Optional.

+ `firmwareVersion` : The firmware version of this sensor.
    + Attribute type: [Text](https://schema.org/Text).
    + Optional.
    
+ `serialNumber` : The serial number assigned by the manufacturer.
    + Normative References: [https://schema.org/serialNumber](https://schema.org/serialNumber).
    + Optional.
    
+ `provider` : The provider of the sensor.
    + Normative References: [https://schema.org/provider](https://schema.org/provider).
    + Optional.

+ `sensorState` : State of this sensor from an operational point of view. Its value can be vendor dependent.  
    + Type: [Text](https://schema.org/Text).
    + Attribute metadata:
        + `timestamp`: Timestamp when the last update of the attribute happened.
        This value can also appear as a FIWARE [TimeInstant](https://github.com/telefonicaid/iotagent-node-lib#TimeInstant).
            + Type: [DateTime](http://schema.org/DateTime).
    + Optional.
    
+ `location` : Location of this sensor represented by a GeoJSON geometry of type point. 
    + Attribute type: `geo:json`.
    + Normative References: [https://tools.ietf.org/html/rfc7946](https://tools.ietf.org/html/rfc7946).
    + Optional.

+ `value` : A observed or reported value. For actuator sensors, it is an attribute that allows
a controlling application to change the actuation setting. For instance, a switch sensor which is currently *on* can report a value `"on"`of type `Text`.
Obviously, in order to toggle the referred switch, this attribute value will have to be changed to `"off"`.
    + Attribute type: Any type, depending on the sensor. Usually [Text](https://schema.org/Text) or [QuantitativeValue](https://schema.org/QuantitativeValue).
    + Attribute metadata:
        + `timestamp`: Timestamp when the last update of the attribute happened.
        This value can also appear as a FIWARE [TimeInstant](https://github.com/telefonicaid/iotagent-node-lib#TimeInstant).
            + Type: [DateTime](http://schema.org/DateTime).
    + Optional.

+ `configuration` : Sensor's technical configuration. This attribute is intended to be a dictionary of properties which capture parameters which have to do with the configuration of a sensor (timeouts, reporting periods, etc.) and which are not currently covered by the standard attributes defined by this model. 
    + Attribute type: [StructuredValue](https://schema.org/StructuredValue).
    + Attribute metadata:
        + `dateModified` :  It captures the last modification timestamp of this attribute.
            + Type: [DateTime](https://schema.org/DateTime).
    + Optional.
   
+ `refSensorModel` : The sensor's model.
    + Attribute type: Reference to a single entity of type [SensorModel](../../SensorModel/doc/spec.md).
    + Optional.

+ `dateManufactured` : A timestamp which denotes when the sensor was manufactured.
    + Attribute type: [DateTime](https://schema.org/DateTime).
    + Optional.

+ `dateInstalled` : A timestamp which denotes when the sensor was installed (if it requires installation).
    + Attribute type: [DateTime](https://schema.org/DateTime).
    + Optional.

+ `dateLastCalibration` : A timestamp which denotes when the last calibration of the sensor happened.
    + Attribute type: [DateTime](https://schema.org/DateTime).
    + Optional.

+ `dateModified` : Last update timestamp of this entity.
    + Attribute type: [DateTime](https://schema.org/DateTime).
    + Optional.

+ `dateCreated` : Entity's creation timestamp.
    + Attribute type: [DateTime](https://schema.org/DateTime).
    + Mandatory.

## Examples

    {
      "id": "sensor-9845A",
      "type": "Sensor",
      "category": "motion",
      "classification": "accelerometer"
      "controlledProperty": "acceleration",
      "serialNumber": "9845A",
      "value": "-69.895,72.0493,4.90137,2017-01-18T20:45:43.765Z-0800 -69.844,72.0726,4.85817,2017-01-18T20:45:43.799Z-0800...",
      "configuration": {
        "data": {  
          "format": "csv"
        },
        "sensor": {  
          "sampleRate": {
            "value": "60",
            "type": "hz"
          }
        }
      },
      "refSensorModel": "mySensor-sensor-345",
      "dateCreated": "2014-09-11",
    }


## Test it with a real service

T.B.D.

## Issues

T.B.D.

# Sensor Model

## Description

This entity captures the static properties of a Sensor component. 

## Data Model

+ `id` : Unique identifier. 

+ `type` : Entity type. It must be equal to `SensorModel`.

+ `category` : Sensor's category(ies).
    + Attribute type: List of [Text](https://schema.org/Text)
    + Allowed values, one of the following or any other meaningful to the application:
        + `motion` : Are useful for monitoring physical movement, such as tilt, shake, rotation, or swing. The movement is usually a reflection of direct user input, but it can also be a reflection of the physical environment in which the sensor is sitting. 
           [http://ontology.tno.nl/saref/#Sensor](http://ontology.tno.nl/saref/#Sensor).
    + Mandatory
    
+ `deviceClass` : Class of constrained device as specified by RFC 7228.
If the device is not a constrained device this property can be left as `null` or undefined. 
    + Attribute type: [Text](https://schema.org/Text)
    + Normative References: [RFC7228](https://tools.ietf.org/html/rfc7228#section-3)
    + Allowed values: (`C0`, `C1`, `C2`)
    + Optional

+ `controlledProperty` : Anything that can be sensed, measured or controlled by.
    + Attribute type: List of [Text](https://schema.org/Text)
    + Allowed values: (some of this values are defined as instances of the class `Property` in SAREF)
        + (`temperature`, `humidity`, `light`, `motion`, `fillingLevel`, `occupancy`, `power`, `pressure`, `smoke`, `energy`, `airPollution`, `noiseLevel`, `weatherConditions`, `precipitation`, `windSpeed`, `windDirection`, `barometricPressure`, `solarRadiation`, `depth`, `pH`, `pressure`, `conductivity`, `conductance`, `tss`, `tds`, `turbidity`, `salinity`, `orp`, `cdom`, `waterPollution`, `location`, `speed`, `heading`, `weight`, `waterConsumption`, `gasComsumption`, `electricityConsumption`, `acceleration`, `orientation`)
    + Mandatory
        
+ `function` :  The functionality necessary to accomplish the task for which a Sensor is designed.
    Defined by [SAREF](https://w3id.org/saref#Function).
    + Attribute type: List of [Text](https://schema.org/Text)
    + Allowed values: (`levelControl`, `sensing`, `onOff`, `openClose`, `metering`, `eventNotification`), from SAREF.
    + Optional
    
+ `supportedProtocol` : Supported protocol(s) or networks.
    + Attribute type: List of [Text](https://schema.org/Text).
    + Allowed values: (`ul20`, `mqtt`, `lwm2m`, `http`, `websocket`, `onem2m`, `sigfox`, `lora`,
    `nb-iot`, `ec-gsm-iot`, `lte-m`, `cat-m`, `3g`, `grps`)  or any other value meaningful for an application. 
    + Optional
    
+ `supportedUnits` : Units of measurement supported by the sensor.
    + Attribute type: List of [Text](https://schema.org/Text).
    + Allowed values: The unit code (text) of measurement given using the
        [UN/CEFACT Common Code](http://wiki.goodrelations-vocabulary.org/Documentation/UN/CEFACT_Common_Codes) (max. 3 characters).
    + Optional
    
+ `energyLimitationClass` : Sensor's class of energy limitation as per RFC 7228.
    + Attribute type: [Text](https://schema.org/Text)
    + Normative References: [RFC7228](https://tools.ietf.org/html/rfc7228#page-11)
    + Allowed values: (`E0`, `E1`, `E2`, `E9`)
    + Optional

+ `brandName` : Sensor's brand name.
    + Attribute type: [Text](https://schema.org/Text)
    + See also: [https://schema.org/brand](https://schema.org/brand)
    + Mandatory

+ `modelName` : Sensor's model name.
    + Attribute type: [Text](https://schema.org/Text)
    + See also: [https://schema.org/model](https://schema.org/model)
    + Mandatory

+ `manufacturerName` : Sensor's manufacturer name.
    + Attribute type: [Text](https://schema.org/Text)
    + See also: [https://schema.org/model](https://schema.org/model)
    + Mandatory

+ `name` : Name given to this sensor model.
    + Normative References: [https://schema.org/name](https://schema.org/name)
    + Mandatory
    
+ `description` : Sensor's description
    + Normative References: [description](https://schema.org/description)
    + Optional

+ `documentation` : A link to sensor's documentation.
    + Attribute type: [URL](https://schema.org/URL)
    + Optional

+ `image` : A link to an image depicting the concerned sensor.
    + Normative References: [https://schema.org/image](https://schema.org/image)
    + Optional

+ `dateModified` : Last update timestamp of this entity.
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Optional

+ `dateCreated` : Entity's creation timestamp.
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Optional    

## Examples

    {
      "id": "mySensor-sensor-345",
      "type": "SensorModel",
      "name": "mySensor Sensor for sensing acceleration 345",
      "brandName": "mySensor",
      "modelName": "S4Container 345",
      "manufacturerName": "mySensor Inc.",
      "category": ["motion"],
      "function": ["sensing"],
      "controlledProperty": ["acceleration"]
    }

## Test it with a real service

T.B.D.

## Issues

T.B.D.

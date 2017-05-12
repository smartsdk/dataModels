# Multisensory Device 

## Description

This model is built based on the Device & DeviceModel entities [DEVICE](../Device), however, rather than contextualise in the IoT scope, this model is referenced aims to overcome bonding to cover a larger variety of objects. In this context, an apparatus (hardware + software + firmware) intended to accomplish a particular task (sensing the environment, actuating, etc.). A MultisensoryDevice is constituted by a set of tangible sensors  which contains some logic and is producer and/or consumer of data, and it is assumed to be capable of communicating electronically via a network.


## Data Model

+ `id` : Unique identifier. 

+ `type` : Entity type. It must be equal to `Device`.

+ `category` : See attribute `category` from [DeviceModel](../DeviceModel/doc/spec.md). Optional but recommended to optimize queries.
        
+ `controlledProperty` : See attribute `controlledProperty` from [DeviceModel](../../DeviceModel/doc/spec.md). Optional but recommended to optimize queries.

+ `controlledAsset` : The asset(s) (building, object, etc.) controlled by the device.
    + Attribute type: List of [Text](https://schema.org) or Reference(s) to another entity.
    + Optional

+ `mnc` : This property identifies the Mobile Network Code (MNC) of the network the device is attached to.
The MNC is used in combination with a Mobile Country Code (MCC) (also known as a "MCC / MNC tuple")
to uniquely identify a mobile phone operator/carrier using the GSM, CDMA, iDEN, TETRA
and 3G / 4G public land mobile networks and some satellite mobile networks.
    + Attribute type: [Text](https://schema.org/Text)
    + Optional

+ `mcc` : Mobile Country Code - This property identifies univoquely the country of the mobile network the device is attached to.
    + Attribute type: [Text](https://schema.org/Text)
    + Optional
    
+ `macAddress` : The MAC address of the device.
    + Attribute type: [Text](https://schema.org/Text)
    + Optional
    
+ `ipAddress` : The IP address of the device. It can be a comma separated list of values if the device has more than one IP address. 
    + Attribute type: [Text](https://schema.org/Text)
    + Optional

+ `supportedProtocol` : See attribute `supportedProtocol` from [DeviceModel](../../DeviceModel/doc/spec.md). Needed if due to a software update
new protocols are supported. Otherwise it is better to convey it at `DeviceModel` level. 

+ `configuration` : Device's technical configuration. This attribute is intended to be a dictionary of properties which capture
parameters which have to do with the configuration of a device (timeouts, reporting periods, etc.)
and which are not currently covered by the standard attributes defined by this model. 
    + Attribute type: [StructuredValue](https://schema.org/StructuredValue)
    + Attribute metadata:
        + `dateModified` :  It captures the last modification timestamp of this attribute.
            + Type: [DateTime](https://schema.org/DateTime) 
    + Optional
    
+ `location` : Location of this device represented by a GeoJSON geometry of type point. 
    + Attribute type: `geo:json`.
    + Normative References: [https://tools.ietf.org/html/rfc7946](https://tools.ietf.org/html/rfc7946)
    + Optional.
    
+ `name` : A mnemonic name given to the device.
    + Normative References: [name](https://schema.org/name)
    + Optional

+ `description` : Device's description.
    + Normative References: [description](https://schema.org/description)
    + Optional

+ `dateInstalled` : A timestamp which denotes when the device was installed (if it requires installation).
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Optional

+ `dateFirstUsed` : A timestamp which denotes when the device was first used.
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Optional

+ `dateManufactured` : A timestamp which denotes when the device was manufactured.
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Optional

+ `hardwareVersion` : The hardware version of this device.
    + Attribute type: [Text](https://schema.org/Text)
    + Optional

+ `softwareVersion` : The software version of this device.
    + Attribute type: [Text](https://schema.org/Text)
    + Optional

+ `firmwareVersion` : The firmware version of this device.
    + Attribute type: [Text](https://schema.org/Text)
    + Optional

+ `osVersion` : The version of the host operating system device.
    + Attribute type: [Text](https://schema.org/Text)
    + Optional

+ `dateLastCalibration` : A timestamp which denotes when the last calibration of the device happened.
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Optional
    
+ `serialNumber` : The serial number assigned by the manufacturer.
    + Normative References: [https://schema.org/serialNumber](https://schema.org/serialNumber)
    + Mandatory
    
+ `provider` : The provider of the device.
    + Normative References: [https://schema.org/provider](https://schema.org/provider)
    + Optional

+ `refDeviceModel` : The device's model.
    + Attribute type: Reference to an entity of type [DeviceModel](../../DeviceModel/doc/spec.md).
    + Mandatory

+ `refSensor` : The sensor component.
    + Attribute type: List of reference to an entity of type [Sensor](../../SensorModel/doc/spec.md).
    + Mandatory

+ `batteryLevel` : Device's battery level. It must be equal to `1.0` when battery is full. `0.0` when battery ìs empty.
`null` when cannot be determined. 
    + Type: [Number](https://schema.org/Number)
    + Allowed values: Interval [0,1]
    + Attribute metadata:
        + `timestamp`: Timestamp when the last update of the attribute happened.
        This value can also appear as a FIWARE [TimeInstant](https://github.com/telefonicaid/iotagent-node-lib#TimeInstant)
            + Type: [DateTime](http://schema.org/DateTime)
    + Optional
    
+ `deviceState` : State of this device from an operational point of view. Its value can be vendor dependent.  
    + Type: [Text](https://schema.org/Text)
    + Attribute metadata:
        + `timestamp`: Timestamp when the last update of the attribute happened.
        This value can also appear as a FIWARE [TimeInstant](https://github.com/telefonicaid/iotagent-node-lib#TimeInstant)
            + Type: [DateTime](http://schema.org/DateTime)
    + Optional

+ `dateLastValueReported` : A timestamp which denotes the last time when the device successfully reported data to the cloud.
    + Attribute type: [DateTime](https://schema.org/)
    + Optional

+ `dateModified` : Last update timestamp of this entity.
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Optional

+ `dateCreated` : Entity's creation timestamp.
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Optional    

## Examples

    {
      "id": "device-9845A",
      "type": "MultisensoryDevice",
      "category": ["smartphone"],
      "refDeviceModel": "mySensor-sensor-345",
      "serialNumer": "9845A",
      "description": "Smarthphone",
      "refSensor":[
        "sensor-9845A",
        "sensor-9845B",
        "sensor-9845C"
      ]
      "dateInstalled": "2016-08-22T10:18:16Z"
    }


## Test it with a real service

T.B.D.

## Issues

T.B.D.

# PhysicalTest

## Description

Sensor data collected along a physical test in the scope of health. This model has been developed based on [Open mHealth](http://www.openmhealth.org/). 

## Data Model

A JSON Schema corresponding to this data model can be found [here](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/PhysicalTest/physical-test-1.x.json).

+ `id` : Entity's unique identifier which must follow a specific format (i.e., \<DEVICE UNIQUE ID\>-\<SENSOR\>-\<TEST NUMBER\>; without blank spaces in between and using capital letters).
   + Mandatory.

+ `type` : Entity type. It must be equal to `PhysicalTest`.
   + Mandatory.

+ `test` : Name of physical test.
   + Attribute type: [test-type](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/test-type-1.x.json).
   + Mandatory.

+ `refActor` : Reference to the actual User to which this UserContext is associated. Within FIWARE, this reference could point to the end of the FIWARE Identity Manager, where FIWARE user profiles are stored.
   + Attribute type: `string`.
   + Mandatory.

+ `refDevice` : Reference to the device(s) used to monitor this test.
   + Attribute type: List of Reference to entity(ies) of type [Device](https://github.com/smartsdk/dataModels/blob/master/Device/Device/doc/spec.md)
   + Mandatory.

+ `dateTestStarted` : Time the test starts.
   + Attribute type: [DateTime](https://schema.org/DateTime).
   + Mandatory.

+ `dateTestEnded` : Time the test ends.
   + Attribute type: [DateTime](https://schema.org/DateTime).
   + Mandatory.


    
## Examples of use
### Creation of PhysicalTest entity

```
{  
  "id": "test-ffffffffff9cbbf4465f0ef30033c587-acc-7118",
  "type": "PhysicalTest",
  "test": {  
      "value": "Timed Up and Go",
      "type": "test-type"
   },
  "refActor": "https://account.lab.fiware.org/users/1",
  "refDevice": "device-ffffffffff9cbbf4465f0ef30033c587-acc-7118",
  "dateTestStarted": {
      "value": "2017-01-18T20:45:58.447Z-0800",
      "type": "DateTime"
  },
  "dateTestEnded": {
      "value": "2017-01-18T20:45:42.697Z-0800",
      "type": "DateTime"
  }
}
```

### Creation of Device entity (Dependency on Device)
```
{
  "id": "device-ffffffffff9cbbf4465f0ef30033c587-acc-7118",
  "type": "Device",
  "category": ["smartphone"],
  "controlledProperty": ["accelerometer","orientation"],
  "osVersion": "Android 4.0",
  "softwareVersion": "MA-Test 1.6",
  "hardwareVersion": "GP-P9872",
  "firmwareVersion": "SM-A310F",
  "refDeviceModel": "model-ffffffffff9cbbf4465f0ef30033c587-acc-7118",
  "value": {"acceleration" : "-69.895,72.0493,4.90137,2017-01-18T20:45:43.765Z-0800 -69.844,72.0726,4.85817,2017-01-18T20:45:43.799Z-0800...", "orientation" : "-69.895,72.0493,4.90137,2017-01-18T20:45:43.765Z-0800 -69.844,72.0726,4.85817,2017-01-18T20:45:43.799Z-0800..." },
  "configuration": {
    "data": {  
      "format": {
        "value": "csv",
        "type": "data-format"
      }
    },
    "sensor": {  
      "sampleRate": {
        "value": "60",
        "type": "hz"
      }
    }
  },
  "dateCreated": "2017-04-05"
}
```

### Creation of Device entity (Dependency on DeviceModel)
```
{
  "id": "model-ffffffffff9cbbf4465f0ef30033c587-acc-7118",
  "type": "DeviceModel",
  "function": ["sensing"],
  "brandName": "Xioami",
  "modelName": "MI 5",
  "manufacturerName": "Samsung"
}
```

## Use it with a real service

T.B.D.

## Open Issues

T.B.A.
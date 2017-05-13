# Sensor

## Description

The motivation for developing this model relies on the need of describe attributes values from each sensor embebed into a device. Thus, rather than considering a device as a whole entity, Sensor & SensorModel split an apparatus (i.e., device) into separated elements (i.e., sensors).

```
{
  "id": "sensor-9845A",
  "type": "Sensor",
  "category": "motion",
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
```

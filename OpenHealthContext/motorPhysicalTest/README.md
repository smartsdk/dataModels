# MotorPhysicalTest

## Description

Sensor data collected along a physical test in the scope of health. This model has been developed inspired by the [Open mHealth](http://www.openmhealth.org/).

## Examples of use

```
{  
  "id": "test-ffffffffff9cbbf4465f0ef30033c587-acc-7118",
  "type": "MotorPhysicalTest",
  "testType": "Timed Up and Go",
  "refUser": "http://207.249.127.162:1234/users/1",
  "refMultisensoryDevice": [
                              "device-9845A", 
                              "device-9845B", 
                              "device-9845C"
                            ],
  "configuration": {
    "relationship": "device-limbs",
    "data":[
      {
        "device": "device-9845A",
        "position": "right-leg"
      },
      {
        "device": "device-9845B",
        "position": "left-leg"
      },
      {
        "device": "device-9845C",
        "position": "lower-back"
      }
    ]
  },
  "dateTestStarted": "2017-01-18T20:45:58.447Z",
  "dateTestEnded": "2017-01-18T20:45:42.697Z"
}
```
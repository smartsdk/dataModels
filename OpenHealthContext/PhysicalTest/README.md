# PhysicalTest

## Description

Sensor data collected along a physical test in the scope of health. This model has been developed based on [Open mHealth](http://www.openmhealth.org/). 
    
## Examples of use

```
{  
   "id": "ffffffffff9cbbf4465f0ef30033c587-acc-7118",
   "type": "PhysicalTest",
   "test": {  
      "value": "Timed Up and Go",
      "type": "test-type"
   },
   "data": {  
      "value": "-69.895,72.0493,4.90137,2017-01-18T20:45:43.765Z-0800 -69.844,72.0726,4.85817,2017-01-18T20:45:43.799Z-0800 -69.8184,72.0956,4.84979,2017-01-18T20:45:43.859Z-0800 -69.7982,72.1125,4.83087,2017-01-18T20:45:43.892Z-0800 -69.7344,72.1441,4.77256,2017-01-18T20:45:43.930Z-0800 -69.6329,72.1785,4.6916,2017-01-18T20:45:43.957Z-0800 -69.5742,72.1842,4.63849,2017-01-18T20:45:43.984Z-0800 -69.5733,72.215,4.64865,2017-01-18T20:45:44.078Z-0800 -69.5594,72.2631,4.64678,2017-01-18T20:45:44.196Z-0800 -69.5009,72.2957,4.59217,2017-01-18T20:45:44.236Z-0800...",
      "type": "sensor-data",

      "metadata": {  
         "format": {  
            "value": "csv",
            "type": "data-format"
         },
         "device": {  
            "value": "Smartphone",
            "type": "device-type"
         },
         "model": {  
            "value": "MI 5"
         },
         "brand": {  
            "value": "Xioami"
         },
         "software": {  
            "value": "vN1.0_vC6"
         },
         "library": {  
            "value": "23"
         }
      }
   },
   "sensor": {  
      "value": "Accelerometer",
      "type": "sensor-type",
      "metadata": {  
         "name": {
            "value": "KR3DM 3-axis"
         },
         "vendor": {
            "value": "STMicroelectronics"
         },
         "version": {
            "value": "1"
         },
         "power": {
            "value": "0.23"
            "type": "mA"
         },
         "resolution": {
            "value": "0.0191536136",
            "type": "m/s2"
         },
         "maxRange": {
            "value": "19.6133003135",
            "type": "m/s2"
         },
         "speed": {
            "value": "60",
            "type": "hz"
         }
      }
   },
   "omh:end_date_time": {
      "value": "2017-01-18T20:45:58.447Z-0800",
      "type": "omh:date-time"
   },
   "omh:start_date_time": {
      "value": "2017-01-18T20:45:42.697Z-0800",
      "type": "omh:date-time"
   }
}
```

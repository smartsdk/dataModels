# WeatherAlarm

This folder contains all the software artefacts to offer weather alarm data in NGSIv2.
The source of this data is the global [European Weather Alarm Service](http://meteoalarm.eu).

* `meteoalarm.py`. Exposes a NGSIv2 end point for querying weather alarms throughout Europe.

Before using this data please check license at the original data source. 

**Note**: JSON Schemas only capture the NGSI simplified representation, this means that to test the JSON schema examples with
a [FIWARE NGSI version 2](http://fiware.github.io/specifications/ngsiv2/stable) API implementation, you need to use the `keyValues`
mode (`options=keyValues`).

## Examples of use

```
curl http://130.206.83.68:1028/v2/entities?type=WeatherAlarm&q=country:ES
```

```json
{
    "awarenessLevel": "Orange",
    "awarenessType": "Snow/Ice",
    "source": "http://www.meteoalarm.eu",
    "address": {
      "addressCountry": "ES",
      "addressRegion": "Huesca"
    },
    "dateCreated": "2016-03-14T13:54:01",
    "type": "WeatherAlarm",
    "id": "WeatherAlarm-83b872975414bfca10832e564a1bb416-7",
    "validity": {
      "to": "2016-03-14T23:59:00",
      "from": "2016-03-14T13:00:00"
    }
}
```
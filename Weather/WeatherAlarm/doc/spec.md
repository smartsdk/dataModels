# Weather alarm

The formal documentation is not available yet. In the meantime please check some of the examples of use.

**Note**: JSON Schemas only capture the NGSI simplified representation, this means that to test the JSON schema examples with
a [FIWARE NGSI version 2](http://fiware.github.io/specifications/ngsiv2/stable) API implementation, you need to use the `keyValues`
mode (`options=keyValues`).

## Examples of use

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
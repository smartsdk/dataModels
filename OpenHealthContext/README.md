# Schema library (v 1.0)

This set of schemas represent a mechanism to package sensor data collected from mobile devices worn by a user while performing taking into account medical detail information.

These data models allow to perform health data tracking. They have been designed with a view to enabling trivial interoperability between FIWARE NGSI version 2 and Open mHealth. As a result, property names have not been normalized to the camelCasesyntax, they remain as currently specified by [Open mHealth](http://www.openmhealth.org/). That is the rationale behind naming entity types with omh prefix. However, a few properties are added, so that FIWARE NGSI version 2 implementations can properly store respective data.

oHealth-Context data model defines the following entity:


## Used in general test
* [User](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/User/user-1.x.json)
* [Control test](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/ClinicalControl/control-test-1.x.json)
* [Physical test](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/PhysicalTest/physical-test-1.x.json)
* [Questionnaire](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/Questionnaire/questionnaire-1.x.json)
* [Test type](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/test-type-1.x.json)
* [Test identification](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/test-identification-1.x.json)
* [User identification](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/user-identification-1.x.json)
* [Sensor type](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/sensor-type-1.x.json)
* [Sensor speed](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/sensor-speed-1.x.json)
* [Sensor data](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/sensor-data-1.x.json)
* [Sensor resolution](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/sensor-resolution-1.x.json)
* [Sensor power](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/sensor-power-1.x.json)
* [Time interval](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/time-interval-1.x.json)
* [Gender](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/gender-1.x.json)
* [Birthday](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/birthday-1.x.json)
* [Body weight](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/body-weight-1.x.json)
* [Body height](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/body-height-1.x.json)
* [Waist circumference](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/waist-circumference-1.x.json)
* [Heart rate](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/heart-rate-1.x.json)
* [Systolic blood pressure](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/systolic-blood-pressure-1.x.json)
* [Diastolic blood pressure](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/diastolic-blood-pressure-1.x.json)
* [Question identification](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/question-identification-1.x.json)
* [Question](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/question-1.x.json)
* [Answer to question](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/answer-to-question-1.x.json)
* [Date time](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/date-time-1.x.json)

## Specific purpose (Physical test)

Schemas that correspond to the variables of interest for some physical test used as proof of concept.

### Test: Timed Up and Go 
* [Step count](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/step-count-1.x.json)
* [Walk speed](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/walk-speed-1.x.json)
* [Distance between steps](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/step-distance-1.x.json)
* [Distance unit value](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/distance-unit-1.x.json)
* [Time between steps](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/latency-1.x.json)

### Test: 30-Second Chair Stand Test
* [Number of repetitions](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/repetitions-1.x.json)
* [Time between repetitions](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/latency-1.x.json)

### Test: 4-Stage Balance Test
* [Interval of time that last the test](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/duration-unit-value-1.x.json)
* [Balance index](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/balance-index-1.x.json)
* [Balance test](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/balance-test-1.x.json)
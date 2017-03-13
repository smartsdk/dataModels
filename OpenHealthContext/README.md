# Schema library (v 1.0)

This set of schemas represent a mechanism to package sensor data collected from mobile devices worn by a user while performing taking into account medical detail information.

These data models allow to perform health data tracking. They have been designed with a view to enabling trivial interoperability between FIWARE NGSI version 2 and Open mHealth. As a result, property names have not been normalized to the camelCasesyntax, they remain as currently specified by [Open mHealth](http://www.openmhealth.org/). That is the rationale behind naming entity types with omh prefix. However, a few properties are added, so that FIWARE NGSI version 2 implementations can properly store respective data.

oHealth-Context data model defines the following entity:


## Used in general test
* [User](./User/user-1.x.json)
* [Control test](./ClinicalControl/control-test-1.x.json)
* [Physical test](./PhysicalTest/physical-test-1.x.json)
* [Questionnaire](./Questionnaire/questionnaire-1.x.json)
* [Test type](./dataType/test-type-1.x.json)
* [Test identification](./dataType/test-identification-1.x.json)
* [User identification](./dataType/user-identification-1.x.json)
* [Sensor type](./dataType/sensor-type-1.x.json)
* [Sensor speed](./dataType/sensor-speed-1.x.json)
* [Sensor data](./dataType/sensor-data-1.x.json)
* [Sensor resolution](./dataType/sensor-resolution-1.x.json)
* [Sensor power](./dataType/sensor-power-1.x.json)
* [Gender](./dataType/gender-1.x.json)
* [Waist circumference](./dataType/waist-circumference-1.x.json)
* [Question identification](./dataType/question-identification-1.x.json)
* [Question](./dataType/question-1.x.json)
* [Answer to question](./dataType/answer-to-question-1.x.json)

## Specific purpose (Physical test)

Schemas that correspond to the variables of interest for some physical test used as proof of concept.

### Test: Timed Up and Go 
* [Walk speed](./dataType/walk-speed-1.x.json)
* [Distance between steps](./dataType/step-distance-1.x.json)
* [Distance unit value](./dataType/distance-unit-1.x.json)
* [Time between steps](./dataType/latency-1.x.json)

### Test: 30-Second Chair Stand Test
* [Number of repetitions](./dataType/repetitions-1.x.json)
* [Time between repetitions](./dataType/latency-1.x.json)

### Test: 4-Stage Balance Test
* [Interval of time that last the test](http://www.openmhealth.org/schema/omh/duration-unit-value-1.0.json)
* [Balance index](./dataType/balance-index-1.x.json)
* [Balance test](./dataType/balance-test-1.x.json)
=======
# PREFACE

This project provides an overview of a data model in the scope of sensing data for wearable and mobile devices. It introduces a data model called oHealth-Context which stands for Open Health Context.


# INTRODUCTION

oHealth-Context is an initiative proposed as part of the SmartSDk project track HealthCare-App. Its aims is to benefit a range of individuals and organizations (e.g., patients, researchers, health care system, government, etc.) by reducing the complexity of health data, through a standardized set of schemas and software stack that might facilitate writing applications that can process and create clinical data, regardless of where the data comes from.

The interpretation of clinical data is critical and needs to be associated to proper metadata. For instance, it is imperative for a physician to differentiate between glucose levels among diabetic patients, or to distinguish whether a heart patient is self-reporting his heart rate or whether it is being automatically collected during resting or exercise time. In this context, oHealth-Context provides useful data structures to facilitate a meaningful interpretation of the data. 

oHealth-Context is built based on an open source health set of specifications called: Open Mobile Health; which consist on a set of tools and specifications designed to handle medical data. 

# MOTIVATION

Projects like the Precision Medicine Initiative and the deployment of private services like: Apple’s research-kit & care-kit, fitbit, Google fit, highlight the relevance of having a standardized and interoperable dataset. Hence, common data schemas are paramount to the semantic interpretation and complexity of health data. In this context, a main concern of mobile sensing is to concentrate reliable datasets, which requires a shared vocabulary of terms and relationships. Other similar initiatives include: DataOne; that provides a set of data-models and specifications in the context of environmental data, OHDSI; which provides a set of data models and set of tools (e.g., API) to handle data based on healthcare. 

In this project we have adopted and extended the standardized mHealth specifications to cover the need of oHealth-Context on FIWARE.

# SCHEMAS

Data schemas specify the format and content of data, such as blood glucose readings, blood pressure, body fat percentage, calories burned, among others; which affects how pre-defined programs might compute data. On the other hand, data usually comes from different devices and/or platforms, which enrich but difficult a more interesting across-data analysis. Thus, a common schema serves as a single source of documentation that can be referenced whenever and wherever the data points are used.

The schemas defined in this document are meaningful in distinctions for each clinical measure; for instance, to sense heart rate data, blood pressure, sugar level, so forth, increasing the overall clinical utility of digital health data and improving the ability of developers to quickly build clinically usable outcomes. As proof of concept, we have developed a mobile phone application, named [3Ollin-Test](https://bitbucket.org/netzahdzc/3ollin-test). Thus, we have defined a reduced and specific sets of schemas aimed at measuring the risk of fall for an older adult; as described next.

# References
*  Estrie D, Sim I. Health care delivery. Open mHealth architecture: an engine for health care innovation. Science 2010 Nov 5;330(6005):759-760.
* Data Observation Network for Earth (DataONE). Data Citation and Attribution; https://www.dataone.org/citing-dataone (accessed Sep. 2016).
* Voss, EA., Makadia, R., Matcho, A., Ma, Q., Knoll, C., Scheme, M., DeFalco, FJ., Lonche, A., Zhu, V., Ryan, PB. (2015). Feasibility and utility of applications of the common data model to multiple, disparate observational health databases. Journal of the American Medical Informatics Association. 22(3):553-64.

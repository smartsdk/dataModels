# Disease data model

## Description
This entity models the health condition of a user, including properties such as pathology, symptom and riskfactor. This information could be useful to determine the best route to follow to reach a destination, taking into account the user health conditions. 

We use this model in Smart City App to propose an ideal route for the user, avoiding high levels of pollution, floods or pollen, etc., allowing for instance, to obtain the preferred routes for people with respiratory diseases.

## Data model
A JSON Schema corresponding to this data model can be found [JSON Schema] 
(https://github.com/smartsdk/dataModels/blob/master/UserDataModels/datamodels/Disease%20profile/DiseaseJsonSchema.json)

+ `id` : Entity's unique identifier. 

+ `type` : Entity type. It must be equal to `disease`.

+ `pathology` : Illness physical or mental of user
    + Attribute type: Text
	+ Normative References: [https://health-lifesci.schema.org/Pathology](https://health-lifesci.schema.org/Pathology)
    + Optional

+ `symptom` : A sign or symptom of user condition.
    + Attribute type: Text
	+ Normative References: [http://health-lifesci.schema.org/signOrSymptom](http://health-lifesci.schema.org/signOrSymptom)
    + Optional

+ `PhysicalActivity` : Any bodily activity that enhances or maintains physical fitness and overall health and wellness. Includes activity that is part of daily living and routine, structured exercise, and exercise prescribed as part of a medical treatment or recovery plan.
    + Attribute type: Text
	+ Normative References: [https://health-lifesci.schema.org/PhysicalActivity](https://health-lifesci.schema.org/PhysicalActivity)
	+ Optional
	
+ `possibleComplication` : A possible unexpected and unfavorable evolution of a medical condition. Complications may include worsening of the signs or symptoms of the disease, extension of the condition to other organ systems, etc.
    + Attribute type: Text
	+ Normative References: [http://health-lifesci.schema.org/possibleComplication](http://health-lifesci.schema.org/possibleComplication)
	+ Optional
	
+ `riskfactor` : A modifiable or non-modifiable factor that increases the risk of user contracting this condition.
    + Attribute type: Text
	+ Normative References: [https://health-lifesci.schema.org/riskFactor](https://health-lifesci.schema.org/riskFactor)
    + Optional
	
+ `dateCreated` : Entity's creation timestamp
	 + Attribute type: DateTime
	 + Optional

+ `dateModified` : Last update timestamp of this entity
	+ Attribute type: DateTime
	+ Optional

## Examples of use
	{
		"id": "disease:asthma",
		"type": "disease", 
		"pathology": "Mild Intermittent Asthma",
		"symptom": "cough, wheeze, chest tightness or difficulty breathing less than twice a week.", 
		"PhysicalActivity": "Do not interfere with normal activities",
		"possibleComplication": "Nighttime symptoms less than twice a month"
		"dateCreated": "2017-01-02T09:25:55.00Z",
		"dateModified": "2017-02-02T011:13:55.00Z"
	}  

## Use it with a real service
T.B.D

## Open Issues
T.B.D
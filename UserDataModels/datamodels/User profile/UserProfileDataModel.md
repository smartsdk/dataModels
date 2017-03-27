# User profile data model

## Description
This entity models a user. This model presents the relationships that a user could have with a disease, a vehicle, a device and  Smart POIs. 
In addition, this model considers the addresses of home and workplace of a user. The objective to consider these data is to save favorites routes and to determine in a quicker manner a route.

## Data model
A JSON Schema corresponding to this data model can be found [JSON Schema] 
(https://github.com/smartsdkInfotec/DataModelsSmartCity/blob/master/datamodels/User%20profile/UserJsonSchema.json)

+ `id` : Entity's unique identifier. 

+ `type` : Entity type. It must be equal to `user`.

+ `id_disease` : Unique identifier related to user disease. 

+ `id_vehicle` : Unique identifier related to user vehicle.

+ `id_device` : Unique identifier related to user device.

+ `id_POI` : Unique identifier related to user POIs

+ `name` : The name of user. 
	+ Attribute type: text
    + Normative References: [https://schema.org/name](https://schema.org/name)
    + Mandatory
	
+ `family name` : The last name of user
	+ Attribute type: text
    + Normative References: [https://schema.org/familyName](https://schema.org/familyName)
    + Mandatory

+ `gender`: The gender of user
	+ Attribute type: text
	+ Normative References: [https://schema.org/gender] (https://schema.org/gender)
	+ Optional

+ `birthDate`:The date of birth of user
	+ Attribute type: Date
	+ Normative References: [https://schema.org/birthDate] (https://schema.org/birthDate)
	+ Optional	

+ `homeaddress`: Civic address of a user´s home. 
	+ Normative References: [https://schema.org/address]
	+ Optional

+ `workaddress`: Civic address of the workplace user. 
	+ Normative References: https://schema.org/address
	+ Optional

+ `dateCreated` : Entity's creation timestamp
	 + Attribute type: DateTime
	 + Optional

+ `dateModified` : Last update timestamp of this entity
	+ Attribute type: DateTime
	+ Optional

## Examples of use

	{
		"id": "user:1",
		"type": "user",  
		"id_disease": "disease:asthma",
		"name": "Iker",  
		"family name": "Smith", 
		"gender": "Smith", 
		"homeaddress": {
			"addressCountry": "Mexico",
			"addressRegion": "Ciudad de México",
			"addressLocality": "Coyoacán",
			"streetAddress": "Puente de Piedra 150",
			"postalCode": "14090"
		},
		"workaddress": {
			"addressCountry": "Mexico",
			"addressRegion": "Ciudad de México",
			"addressLocality": "Tlapan",
			"streetAddress": "San Fernando 37",
			"postalCode": "14050"
		}, 
  
		"dateCreated": "2017-01-02T09:25:55.00Z",
		"dateModified": "2017-02-02T011:13:55.00Z"
	}

## Use it with a real service
T.B.D

## Open Issues
T.B.D
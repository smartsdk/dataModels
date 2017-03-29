# User profile data model

## Description
This entity models a user. In addition, this model considers the addresses of home and workplace of a user. The model considers these data due to that these could be used to save favorites places.

## Data model
A JSON Schema corresponding to this data model can be found [JSON Schema] 
(https://github.com/smartsdk/dataModels/blob/master/UserDataModels/datamodels/User%20profile/UserJsonSchema.json)

+ `id` : Entity's unique identifier. 

+ `type` : Entity type. It must be equal to `user`.

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
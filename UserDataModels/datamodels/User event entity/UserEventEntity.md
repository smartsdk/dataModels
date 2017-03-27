# User event entity data model

## Description
This entity models a user event entity. This model presents the relationships that a user could have with a event. For instances, traffic jam, accidents, weather conditions, high level of pollutants and so on. 
The objective of this model is to define all the data that will send to Orion Context Broker. Then, an application could suscribe to OCB and to take these informaion and to generate notifications for a user or trigger other actions.

## Data model

A JSON Schema corresponding to this data model can be found [JSON Schema] 
(https://github.com/smartsdkInfotec/DataModelsSmartCity/blob/master/datamodels/User%20event%20entity/UserEventEntityJsonSchema.json)

+ `id` : Entity's unique identifier. 

+ `type` : Entity type. It must be equal to `UserEventEntity`.

+ `event` : An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the offers property. Repeated events may be structured as separate Event objects..
	+ Attribute type: text
    + Normative References: [https://schema.org/Event](https://schema.org/Event)
    + Mandatory 

+ `location` : Location of the user event represented by a GeoJSON geometry. 
    + Attribute type: `geo:json`.
    + Normative References: [https://tools.ietf.org/html/rfc7946](https://tools.ietf.org/html/rfc7946)
    + Mandatory
	
+ `eventObserved` : The date and time of this user event in ISO8601 UTCformat. It can be represented by an specific time instant or by an ISO8601 interval.
	+ Attribute type: DateTime or an ISO8601 interval represented as Text.
	+ Mandatory

+ `intensity` : Quantitative measure gauging the degree of force involved in the exercise, for example, heartbeats per minute. May include the velocity of the movement.
	 + Attribute type: text
	 + Normative References: [http://health-lifesci.schema.org/intensity](http://health-lifesci.schema.org/intensity)
	 + Optional

+ `description` : A description of the item.
	 + Attribute type: text
	 + Normative References: [https://schema.org/description](https://schema.org/description)
	 + Optional	 

## Examples of use
	{
		"id": "UserEventEntity:1",
		"type": "UserEventEntity", 
		"event": "Traffic jam",
		"location": {
			"type": "Point",
			"coordinates": [-3.712247222222222, 40.423852777777775]
		},
		"eventObserved": "2017-01-02T09:25:55.00Z",
		"intensity": "Very congested",
		"description": "emergency services at place"
	}  

## Use it with a real service
T.B.D

## Open Issues
T.B.D
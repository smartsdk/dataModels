# Public Transport

## Description

A Public Transport.

## Data Model

+ `id` : Entity's unique identifier. 

+ `type` : Entity type. It must be equal to `PublicTransport`.

+ `name` : Name given to this Public Tranport. 
    + Normative References: [https://schema.org/name](https://schema.org/name)
    + Mandatory

+ `vehicleType` : Type of vehicle from the point of view of its structural characteristics.
This is different than the vehicle category (see below).
    + Attribute type: [Text](https://schema.org/Text)
    + Allowed Values: The following values defined by *VehicleTypeEnum* and *VehicleTypeEnum2*,
    [DATEX 2 version 2.3](http://www.datex2.eu/sites/www.datex2.eu/files/DATEXIISchema_2_2_2_1.zip):
        + (`bus`, `minibus`)
    + Mandatory
    
+ `category` : Vehicle category(ies) from an external point of view.
This is different than the vehicle type (car, lorry, etc.) represented by the `vehicleType` property.
    + Attribute type: List of [Text](https:/schema.org/Text)
    + Allowed values:
        + (`public`, `private`).
    + Mandatory

+ `locationActual` : Vehicle's last known location represented by a GeoJSON Point. Such point may contain the vehicle's
*altitude* as the third component of the `coordinates` array. 
    + Attribute type: `geo:json`.
    + Normative References: [https://tools.ietf.org/html/rfc7946](https://tools.ietf.org/html/rfc7946)

+ `bus_stop` : Vehicle's last known location represented by a GeoJSON Point. Such point may contain the vehicle's
*altitude* as the third component of the `coordinates` array. 
    + Attribute type: `geo:json`.
    + Normative References: [https://tools.ietf.org/html/rfc7946](https://tools.ietf.org/html/rfc7946)
    
+ `areaServed` : Higher level area served by this vehicle. It can be used to group vehicles per responsible, district, neighbourhood, etc.
	+ Attribute type: Text
	+ Mandatory

+ `arrivalTime` : The expected arrival time by PublicTransport to the next stop.
	+ Attribute type: [DateTime](http://schema.org/DateTime)
	+ Mandatory

+ `number_passengers` : The expected arrival time by PublicTransport to the next stop.
	+ Attribute type: [DateTime](http://schema.org/DateTime)
	+ Mandatory		

+ `returnTime` : The expected return time by PublicTransport 
	+ Attribute type: [DateTime](http://schema.org/DateTime)
	+ Mandatory	

+ `vehiclePlateIdentifier` : An identifier or code displayed on a vehicle registration plate attached to the vehicle used for official identification purposes. The registration identifier is numeric or alphanumeric and is unique within the issuing authority's region.
	+ Normative References: DATEX II vehicleRegistrationPlateIdentifier
	+ Attribute Type: Text
	+ Mandatory if vehicleIdentificationNumber is not defined.

+ `description` : A description of the item.
	 + Attribute type: text
	 + Normative References: [https://schema.org/description](https://schema.org/description)
	 + Mandatory	

+ `dateModified` : Last update timestamp of this entity.
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Optional

+ `dateCreated` : Creation timestamp of this entity.
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Optional
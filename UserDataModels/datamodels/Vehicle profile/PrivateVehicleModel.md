# Vehicle

## Description

This vehicle model is a fragment of the Transportation Harmonized Data Models [https://github.com/Fiware/dataModels/blob/master/Transportation/doc/introduction.md](https://github.com/Fiware/dataModels/blob/master/Transportation/doc/introduction.md)

## Data Model

+ `id` : Entity's unique identifier. 

+ `type` : Entity type. It must be equal to `Vehicle`.

+ `name` : Name given to this vehicle. 
    + Normative References: [https://schema.org/name](https://schema.org/name)
    + Optional

+ `description` : Vehicle description. 
    + Normative References: [https://schema.org/description](https://schema.org/description)
    + Optional
    
+ `vehicleType` : Type of vehicle from the point of view of its structural characteristics.
This is different than the vehicle category (see below).
    + Attribute type: [Text](https://schema.org/Text)
    + Allowed Values: The following values defined by *VehicleTypeEnum* and *VehicleTypeEnum2*,
    [DATEX 2 version 2.3](http://www.datex2.eu/sites/www.datex2.eu/files/DATEXIISchema_2_2_2_1.zip):
        + (`bicycle`, `car`,  `motorcycle`,)
    + Mandatory

+ `brandName` : Vehicle's brand name.
    + Attribute type: [Text](https://schema.org/Text)
    + See also: [https://schema.org/brand](https://schema.org/brand)
    + Mandatory
	
+ `modelName` : Vehicle's model name.
    + Attribute type: [Text](https://schema.org/Text)
    + See also: [https://schema.org/model](https://schema.org/model)
    + Mandatory
	
+ `vehicleModelDate` : The release date of a vehicle model (often used to differentiate versions of the same make and model).
    + Normative References: [https://schema.org/vehicleModelDate](https://schema.org/vehicleModelDate)
    + Optional	
	
+ `fuelType` : The type of fuel suitable for the engine or engines of the vehicle.
    + Normative References: [https://schema.org/fuelType](https://schema.org/fuelType)
    + Allowed values: one Of (`gasoline`, `petrol(unleaded)`, `petrol(leaded)`, `petrol`, `diesel`, `electric`,
    `hydrogen`, `lpg`, `autogas`, `cng`, `biodiesel` `ethanol`, `hybrid electric/petrol`, `hybrid electric/diesel`, `other`)
    + Optional

+ `fuelConsumption` : The amount of fuel consumed for traveling a particular distance or temporal
duration with the given vehicle (e.g. liters per 100 km).
    + Normative References: [https://schema.org/fuelConsumption](https://schema.org/fuelConsumption)
    + Default unit: liters per 100 kilometer. 
    + Optional
	
+ `vehiclePlateIdentifier` : An identifier or code displayed on a vehicle registration plate attached to the vehicle used for official identification purposes.
The registration identifier is numeric or alphanumeric and is unique within the issuing authority's region.
    + Normative References: DATEX II `vehicleRegistrationPlateIdentifier`
    + Attribute Type: [Text](https://schema.org/Text)
    + Mandatory if `vehicleIdentificationNumber` is not defined. 
    
+ `dateModified` : Last update timestamp of this entity.
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Optional

+ `dateCreated` : Creation timestamp of this entity.
    + Attribute type: [DateTime](https://schema.org/DateTime)
    + Optional
    


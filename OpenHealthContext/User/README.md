# User

## Description

Reference information of patients/clinician that perform/conduct a physical test.

## Data Model

A JSON Schema corresponding to this data model can be found [here](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/Patient/patient-1.x.json).

+ `id` : Unique identifier. 
    + Mandatory.

+ `type` : Entity type. It could be equal wither to `User`.
    + Mandatory.

+ `profile` : Type of user to referer.
    + Attribute type: [profile](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/profile-1.x.json).
    + Allowed values: (`Patient`, `Clinician`).
    + Mandatory.

+ `gender` : Last update timestamp of this entity.
    + Attribute type: [gender](https://github.com/netzahdzc/oHealth-Context/blob/master/schemas/dataType/gender-1.x.json).
    + Allowed values: (`Male`, `Female`).
    + Mandatory.

+ `birthday` : Date of birth.
    + Attribute type: [birthday](http://www.openmhealth.org/schema/omh/date-time-1.0.json).
    + Mandatory.

+ `dateCreated` : Date of creation.
    + Attribute type: [DateTime](https://schema.org/DateTime).
    + Mandatory.

+ `dateModified` : Last update made to the patient register.
    + Attribute type: [DateTime](https://schema.org/DateTime).
    + Mandatory.
    

## Examples of use

```
{  
   "id": "ffffffffff9cbbf4465f0ef30033c587-patient-4",
   "type": "User",
   "profile": {  
      "value": "Patient",
      "type": "user"
   },
   "gender": {  
      "value": "Male",
      "type": "gender"
   },
   "birthday": {  
      "value": "2017-01-18",
      "type": "birthday"
   },
   "dateCreated": {  
      "value": "2017-01-18T20:45:42.697Z-0800",
      "type": "DateTime"
   },
   "dateModified": {  
      "value": "2017-01-18T20:45:42.697Z-0800",
      "type": "DateTime"
   }
}
```
    
## Use it with a real service

T.B.D.

## Open Issues

T.B.A.
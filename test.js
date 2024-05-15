
const ehr = require('./ehr');

// Adding a sample patient record
ehr.addPatientRecord({
    id: 1,
    name: 'Anshul Abrol',
    dob: '1996-02-09',
    gender: 'Male',
    diagnosis: 'Hypertension'
});

// Retrieving all patient records
const allPatientRecords = ehr.getAllPatientRecords();
console.log(allPatientRecords);

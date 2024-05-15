
// Sample data structure for patient records
let patientRecords = [];

// Function to add a new patient record
function addPatientRecord(patient) {
    patientRecords.push(patient);
}

// Function to retrieve all patient records
function getAllPatientRecords() {
    return patientRecords;
}

// Exporting functions
module.exports = {
    addPatientRecord,
    getAllPatientRecords
};

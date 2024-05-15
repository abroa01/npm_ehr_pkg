Certainly! Here's a basic template for a `README.md` file for your npm package:

```markdown
# npm_ehr_pkg

npm_ehr_pkg is a Node.js module for managing Electronic Health Records (EHR) in healthcare applications.

## Installation

To install npm_ehr_pkg, use npm:

```bash
npm install npm_ehr_pkg
```

## Usage

```javascript
const ehr = require('npm_ehr_pkg');

// Example usage: adding a new patient record
ehr.addPatientRecord({
    id: 1,
    name: 'John Doe',
    dob: '1980-01-01',
    gender: 'Male',
    diagnosis: 'Hypertension'
});

// Example usage: retrieving all patient records
const allPatientRecords = ehr.getAllPatientRecords();
console.log(allPatientRecords);
```

## API

### `addPatientRecord(patient)`

Adds a new patient record to the EHR system.

- `patient`: Object containing patient information (e.g., id, name, dob, gender, diagnosis).

### `getAllPatientRecords()`

Retrieves all patient records from the EHR system.

Returns an array of patient records.

## Contributing

Contributions are welcome! Please feel free to submit a pull request if you'd like to contribute to this project.
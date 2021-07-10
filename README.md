# DSB Schema Files And Postman Collection Test Suite

## Overview
This repository contains a Postman collection with a set of unit tests, which can be used as a development testing tool for data holders developing a DSB compliant API.

Additionally, this repository contains the individual schema validation files for the DSB published APIs as well as the utility used to extract those files from the published standard in ConsumerDataStandardsAustralia/standards repository (cds_full.json)


### Using the Postman collection
Download the 
```
CDR Banking Sector Conformance Tests vX.XX.X.postman.json
```
This file contains the API unit tests and can be run as a test suite (Postman Collection Runner)

The file
```
template-postman-variables.json
```
is designed to be used in the Postman collection test runner. Specify the data holder specific parameters and read into the postman collection prior to the test run.
Click [here]([https://learning.postman.com/docs/running-collections/working-with-data-files/#:~:text=When%20you%20initiate%20a%20collection,file%20before%20starting%20the%20run])) for information on how to use data files in a Postman collection.

The number of tests run will be determined by the values provided in this file. Eg, if no account ids are provided, any test requiring such a parameter will be skipped.

**Note the the order of the tests is important. Do not change**

The file
```
dsb-dhserver -postman-variables.json
```
is configured to work with the published data-holder server maintained by DSB and available in the ConsumerDataStandardsAustralia/java-artefacts repository.

### Running the data extraction
This can be used to extract the individual schema validation files from the published cds_full.json. To run this extraction, run:

```
node extract-schema-validation.js 
```
This will create a folder with the version number in the cds_full.json under the schema folder.

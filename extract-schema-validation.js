// Read the latest published cds_full.json to extract schema validation files
'use strict';

var fs = require('fs'),
    path = require('path'),
    request = require('request');

request.get('https://raw.githubusercontent.com/ConsumerDataStandardsAustralia/standards/master/swagger-gen/api/cds_full.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var fullSchema = body;
         var schemaObject = JSON.parse(fullSchema);
        const schemaVersion = schemaObject.info.version;
        Object.keys(schemaObject.definitions).forEach(key => {
            let struct = schemaObject.definitions[key];
            let data = JSON.stringify(struct, null, 2);
            let dirName = path.join(__dirname, "/schemas/" + schemaVersion);
            // create new directory
            try {
                // first check if directory already exists
                if (!fs.existsSync(dirName)) {
                    fs.mkdirSync(dirName);
                    console.log($`Directory is created.`);
                } else {
                    console.log(`Directory already exists.`);
                }
            } catch (err) {
                console.log(err);
            }
            let fileName = path.join(dirName, key + '.json');

            fs.writeFileSync(fileName, data);
            console.log('Created ' + fileName);
        })
    }
});


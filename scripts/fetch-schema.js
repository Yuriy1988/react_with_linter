'use strict';

const fs = require('fs');
const path = require('path');
const fetchSchema = require('fetch-graphql-schema');

process.env.NODE_ENV = 'development';
// Ensure environment variables are read.
require('../config/env');

const appDirectory = fs.realpathSync(process.cwd());
const schemaFilePath = path.resolve(appDirectory, 'schema.json');

fetchSchema(process.env.REACT_APP_GRAPHQL_ENDPOINT)
  .then(schemaJSON => {
    fs.writeFile(schemaFilePath, schemaJSON, 'utf8', function (err) {
      if (err) {
        throw new Error(err);
      }
      console.log("The schema.json was updated!");
      process.exit();
    })
  })
  .catch(err => {
    console.log("schema.json fetch error: " + (err || err.message));
    process.exit(1);
  });

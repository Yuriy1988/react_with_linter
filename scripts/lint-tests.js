'use strict';

const path = require('path');
const CLIEngine = require('eslint').CLIEngine;
const chalk = require('chalk');

const paths = require('../config/paths');

const cli = new CLIEngine();
const testFilePathPattern = path.resolve(paths.appSrc, '**/*.test.js');
const report = cli.executeOnFiles([testFilePathPattern]);
const formatter = cli.getFormatter();

console.log(formatter(report.results));
if (report.errorCount || report.warningCount) {
    console.log(chalk.red('✖'),' eslint: ', chalk.red('blocked!'));
    throw new Error();
} else {
    console.log(chalk.green('✔'), ' eslint:', chalk.green('passed!'));
}

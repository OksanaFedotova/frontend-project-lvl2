#!/usr/bin/env node

import commander from 'commander';

commander
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .description('Compares two configuration files and shows a difference.');
commander.parse();

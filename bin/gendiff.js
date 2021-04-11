#!/usr/bin/env node

import commander from 'commander';
import genDiff from '../src/genDiff.js';

commander
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <format>', 'output format')
  .description('Compares two configuration files and shows a difference.')
  .action((filepath1, filepath2, options) => {
    console.log(genDiff(filepath1, filepath2, options.format));
  });
commander.parse();

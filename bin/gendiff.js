#!/usr/bin/env node

import commander from 'commander';
import genDiff from '../src/gd.js';

commander
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .description('Compares two configuration files and shows a difference.')
  .action(genDiff);
commander.parse();

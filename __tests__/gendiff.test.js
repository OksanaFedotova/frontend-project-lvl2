import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { describe, expect, test } from '@jest/globals';
import genDiff from '../src/getDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => join(__dirname, '..', '__tests__', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const outputFormats = [['default'], ['stylish'], ['plain']];
const inputData = [['Flat', 'json'], ['Tree', 'json'], ['Flat', 'yml'], ['Tree', 'yml']];

describe.each(outputFormats)('genDiff for %s', (outputFormat) => {
  test.each(inputData)('%s', (nesting, extension) => {
    const file1 = getFixturePath(`file1${nesting}.${extension}`);
    const file2 = getFixturePath(`file2${nesting}.${extension}`);
    const formatter = outputFormat === 'default' ? '' : outputFormat;
    const output = readFile(`output${nesting}_${formatter}.txt`);
    expect(genDiff(file1, file2, formatter)).toEqual(output);
  });
});

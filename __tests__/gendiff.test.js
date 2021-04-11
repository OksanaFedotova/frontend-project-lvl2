import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { describe, expect, test } from '@jest/globals';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => join(__dirname, '..', '__tests__', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const flatStylish = readFile('outputFlat_stylish.txt');
const treeStylish = readFile('outputTree_stylish.txt');
const flatPlain = readFile('outputFlat_plain.txt');
const treePlain = readFile('outputTree_plain.txt');
const flatJson = readFile('outputFlat_json.txt');
const treeJson = readFile('outputTree_json.txt');

const outputs = [['default', flatStylish, treeStylish], ['stylish', flatStylish, treeStylish], ['plain', flatPlain, treePlain], ['json', flatJson, treeJson]];

const extensions = ['json', 'yml'];

const nestingTypes = [['Flat'], ['Tree']];

describe.each(outputs)('genDiff for %s', (name, Flat, Tree) => {
  describe.each(nestingTypes)('%s', (nestingType) => {
    test.each(extensions)('%s', (extension) => {
      const file1 = getFixturePath(`file1${nestingType}.${extension}`);
      const file2 = getFixturePath(`file2${nestingType}.${extension}`);
      const formatter = name === 'default' ? '' : name;
      if (nestingType === 'Flat') {
        expect(genDiff(file1, file2, formatter)).toEqual(Flat);
      } else {
        expect(genDiff(file1, file2, formatter)).toEqual(Tree);
      }
    });
  });
});

import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { describe, expect, test } from '@jest/globals';
import genDiff from '../src/getDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => join(__dirname, '..', '__tests__', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const file1Json = getFixturePath('file1.json');
const file2Json = getFixturePath('file2.json');
const outputJson = readFile('outputJson.txt');
const file1TreeJson = getFixturePath('file1Tree.json');
const file2TreeJson = getFixturePath('file2Tree.json');
const outputTreeJson = readFile('outputTreeJson.txt');
describe('gendiffJson', () => {
  test('plainJson', () => {
    expect(genDiff(file1Json, file2Json)).toEqual(outputJson);
  });

  test('treeJson', () => {
    expect(genDiff(file1TreeJson, file2TreeJson)).toEqual(outputTreeJson);
  });
});
/*
const file1Yaml = getFixturePath('file1.yml');
const file2Yaml = getFixturePath('file2.yml');
const outputYml = readFile('outputYml.txt');
test('gendiffYml', () => {
  expect(genDiff(file1Yaml, file2Yaml)).toEqual(outputYml);
});
*/

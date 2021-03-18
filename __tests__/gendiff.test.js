import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import genDiff from '../src/gd.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__tests__', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const file1 = getFixturePath('file1.json');
const file2 = getFixturePath('file2.json');
const output = readFile('output.txt');
test('gendiff', () => {
    expect(genDiff(file1, file2)).toEqual(output)
})

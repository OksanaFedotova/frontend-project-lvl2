import path from 'path';
import fs from 'fs';
import getParser from './parsers.js';
import getAst from './getAst.js';
import stylish from './formatters/stylish.js';
import plain from './formatters/plain.js';
import json from './formatters/json.js';

const getFile = (fileName) => {
  const data = fs.readFileSync(path.resolve(fileName));
  const extension = path.extname(fileName);
  const parse = getParser(extension);
  const file = parse(data);
  return file;
};
export default (fileName1, fileName2, format) => {
  const file1 = getFile(fileName1);
  const file2 = getFile(fileName2);
  const ast = getAst(file1, file2);
  if (format === 'plain') {
    return plain(ast);
  }
  if (format === 'json') {
    return json(ast);
  }
  return stylish(ast);
};

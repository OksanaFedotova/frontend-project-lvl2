import path from 'path';
import fs from 'fs';
import getParser from './parsers.js';
import getAst from './getAst.js';
import stylish from './stylish.js';
import plain from './plain.js';

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
  return stylish(ast);
};

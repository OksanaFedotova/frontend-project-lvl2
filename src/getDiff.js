import path from 'path';
import fs from 'fs';
import getParser from './parsers.js';
import getAst from './getAst.js';
import stylish from './stylish.js';

const getFile = (fileName) => {
  const data = fs.readFileSync(path.resolve(fileName));
  const extension = path.extname(fileName);
  const parse = getParser(extension);
  const file = parse(data);
  return file;
};
export default (fileName1, fileName2) => {
  const file1 = getFile(fileName1);
  const file2 = getFile(fileName2);
  const ast = getAst(file1, file2);
  console.log(stylish(ast));
  return stylish(ast);
};

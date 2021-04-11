import path from 'path';
import fs from 'fs';
import getParser from './parsers.js';
import getAst from './getAst.js';
import getFormatter from './getFormatter';

const getObj = (fileName) => {
  const data = fs.readFileSync(path.resolve(fileName));
  const extension = path.extname(fileName);
  const parse = getParser(extension);
  const obj = parse(data);
  return obj;
};
export default (fileName1, fileName2, format) => {
  const obj1 = getObj(fileName1);
  const obj2 = getObj(fileName2);
  const ast = getAst(obj1, obj2);
  const formatter = getFormatter(format);
  return formatter(ast);
};

import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

const parseFile = (fileName) => {
  const data = fs.readFileSync(path.resolve(fileName));
  const extension = path.extname(fileName);
  let parse;
  switch (extension) {
    case '.json':
      parse = JSON.parse;
      break;
    case '.yml':
      parse = yaml.load;
      break;
    default:
      throw new Error('незнакомый тип файла');
  }
  return parse(data);
};

export default parseFile;

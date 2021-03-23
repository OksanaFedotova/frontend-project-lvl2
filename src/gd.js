import _ from 'lodash';
import parseFile from './parsers.js';

const getDiff = (file1, file2) => {
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const union = _.union(keys1, keys2).sort();
  const result = union.flatMap((key) => {
    if (!_.has(file1, key)) {
      return `  + ${key}: ${file2[key]}`;
    }
    if (!_.has(file2, key)) {
      return `  - ${key}: ${file1[key]}`;
    }
    if (file2[key] === file1[key]) {
      return `    ${key}: ${file1[key]}`;
    }
    return [`  - ${key}: ${file1[key]}`, `  + ${key}: ${file2[key]}`];
  });
  return `{\n${result.join('\n')}\n}`;
};

export default (fileName1, fileName2) => {
  const file1 = parseFile(fileName1);
  const file2 = parseFile(fileName2);
  return getDiff(file1, file2);
};

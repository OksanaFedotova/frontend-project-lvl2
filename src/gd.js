import _ from 'lodash';
import fs from 'fs';
import path from 'path';

const getDiff = (fileJson1, fileJson2) => {
  const file1 = JSON.parse(fileJson1);
  const file2 = JSON.parse(fileJson2);
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
  const file1 = fs.readFileSync(path.resolve(fileName1));
  const file2 = fs.readFileSync(path.resolve(fileName2));
  console.log(getDiff(file1, file2));
};

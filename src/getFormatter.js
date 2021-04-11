import stylish from './formatters/stylish.js';
import plain from './formatters/plain.js';
import json from './formatters/json.js';

const getFormatter = (format) => {
  if (format === 'plain') {
    return plain;
  }
  if (format === 'json') {
    return json;
  }
  return stylish;
};

export default getFormatter;

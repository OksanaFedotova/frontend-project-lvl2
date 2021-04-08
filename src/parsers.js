import yaml from 'js-yaml';

const getParser = (extension) => {
  if (extension === '.json') {
    return JSON.parse;
  }
  return yaml.load;
};

export default getParser;

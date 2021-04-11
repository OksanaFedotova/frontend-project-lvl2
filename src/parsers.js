import yaml from 'js-yaml';

const getParser = (extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse;
    case '.yml':
      return yaml.load;
    default:
      throw new Error('unknown extension');
  }
};

export default getParser;

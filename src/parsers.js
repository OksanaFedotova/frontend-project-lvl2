import yaml from 'js-yaml';

const getParser = (extension) => {
  let parse;
  switch (extension) {
    case '.json':
      parse = JSON.parse;
      break;
    case '.yml':
      parse = yaml.load;
      break;
    default:
      throw new Error('Unknown file type!');
  }
  return parse;
};

export default getParser;

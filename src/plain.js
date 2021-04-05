import _ from 'lodash';

const stringify = (val) => {
  if (_.isObject(val)) {
    return '[complex value]';
  }
  if (_.isString(val)) {
    return `'${val}'`;
  }
  return val;
};

const plain = (ast) => {
  const iter = (diff, currentName = '') => {
    const result = diff.flatMap((node) => {
      const {
        name,
        value,
        newValue,
        type,
        children,
      } = node;
      const line = `Property '${currentName}${name}'`;
      switch (type) {
        case 'added':
          return `${line} was added with value: ${stringify(value)}`;
        case 'deleted':
          return `${line} was removed`;
        case 'changed':
          return `${line} was updated. From ${stringify(value)} to ${stringify(newValue)}`;
        case 'changed_object':
          return `${iter(children, `${currentName}${name}.`)}`;
        case 'unchanged':
          return '';
        default:
          throw new Error(`Unknown type: '${type}'!`);
      }
    });
    return `${result.filter((str) => str).join('\n')}`;
  };
  return iter(ast);
};
export default plain;

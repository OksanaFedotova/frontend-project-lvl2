import _ from 'lodash';

const stringify = (value, replacer = ' ', spacesCount = 1) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }

    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize);

    const lines = Object
      .entries(currentValue)
      .map(([key, val]) => `    ${currentIndent}${key}: ${iter(val, depth + 1)}`);

    return [
      '{',
      ...lines,
      `${currentIndent}}`,
    ].join('\n');
  };

  return iter(value, 1);
};

const stylish = (ast) => {
  const iter = (diff, depth) => {
    const indent = '    '.repeat(depth - 1);
    const output = diff.flatMap((node) => {
      const {
        name, value, newValue, type, children,
      } = node;
      const line = `${name}: ${stringify(value, ' ', 4 * depth)}`;
      const changedLine = `${name}: ${stringify(newValue, ' ', 4 * depth)}`;
      switch (type) {
        case 'added':
          return `  + ${line}`;
        case 'deleted':
          return `  - ${line}`;
        case 'changed':
          return `  - ${line}\n${indent}  + ${changedLine}`;
        case 'changed_object':
          return `    ${name}: ${iter(children, depth + 1)}`;
        case 'unchanged':
          return `    ${line}`;
        default:
          throw new Error(`Unknown type: '${type}'!`);
      }
    });
    const result = output.map((str) => indent + str);
    return `{\n${result.join('\n')}\n${indent}}`;
  };
  return iter(ast, 1);
};
export default stylish;

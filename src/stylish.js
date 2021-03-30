import _ from 'lodash';

const stringify = (value, replacer = ' ', spacesCount = 1) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }

    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize);

    const lines = Object
      .entries(currentValue)
      .map(([key, val]) => `    ${currentIndent}${key}: ${iter(val, depth + 1)}`);

    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(value, 1);
};

const stylish = (ast) => {
  const iter = (diff, depth) => {
    const initialIndent = '    '.repeat(depth);
    const indent = initialIndent.substring(0, initialIndent.length - 2);
    const bracketIndent = '    '.repeat(depth - 1);
    const outputLines = diff.flatMap((node) => {
      const {
        name,
        value,
        newValue,
        type,
        children,
      } = node;
      const line = `${name}: ${stringify(value, ' ', initialIndent.length)}`;
      const changedLine = `${name}: ${stringify(newValue, ' ', initialIndent.length)}`;
      switch (type) {
        case 'added':
          return `${indent}+ ${line}`;
        case 'deleted':
          return `${indent}- ${line}`;
        case 'changed':
          return `${indent}- ${line}\n${indent}+ ${changedLine}`;
        case 'changed_object':
          return `${indent}  ${name}: ${iter(children, depth + 1)}`;
        case 'unchanged':
          return `${indent}  ${line}`;
        default:
          throw new Error(`Unknown type: '${type}'!`);
      }
    });
    return `{\n${outputLines.join('\n')}\n${bracketIndent}}`;
  };
  return iter(ast, 1);
};
export default stylish;

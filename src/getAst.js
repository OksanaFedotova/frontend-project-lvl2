import _ from 'lodash';

const getNode = (node1, node2, key) => {
  if (!_.has(node1, key)) {
    return {
      name: key,
      value: node2[key],
      type: 'added',
    };
  }
  if (!_.has(node2, key)) {
    return {
      name: key,
      value: node1[key],
      type: 'deleted',
    };
  }
  if (node2[key] === node1[key]) {
    return {
      name: key,
      value: node1[key],
      type: 'unchanged',
    };
  }
  return {
    name: key,
    value: node1[key],
    newValue: node2[key],
    type: 'changed',
  };
};

const isObject = (variable) => _.isObject(variable) && !_.isArray(variable);

const getAst = (file1, file2) => {
  const keys = _.union(_.keys(file1), _.keys(file2));
  const ast = _.sortBy(keys).flatMap((key) => {
    if (isObject(file1[key]) && isObject(file2[key])) {
      return {
        name: key,
        type: 'changed_object',
        children: getAst(file1[key], file2[key]),
      };
    }
    return getNode(file1, file2, key);
  });
  return ast;
};
export default getAst;

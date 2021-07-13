/**
 * 遍历一个树形结构
 * @param treeData
 * @param {Object} options
 * @example options
 *   {
 *     childrenProp: 'children',
 *     nodeCallback: () => {}
 *   }
 * @return {Array} 新的数组
 */
export function walkTree(treeData, options) {
  const { childrenProp = 'children', nodeCallback } = options;

  const walk = (treeNodes, parent) => {
    return treeNodes.map(node => {
      const newNode = { ...node };
      nodeCallback(newNode, parent);
      if (newNode[childrenProp] && newNode[childrenProp].length > 0) {
        newNode[childrenProp] = walk(newNode[childrenProp], newNode);
      }
      return newNode;
    });
  };
  return walk(treeData, null);
}

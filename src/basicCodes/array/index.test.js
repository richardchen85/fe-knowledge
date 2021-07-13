import * as array from './index';

it('walkTree', () => {
  const treeData = [
    {
      value: 1,
      label: 'node-1',
      children: [
        {
          value: 11,
          label: 'node-1-1',
          children: [
            { value: 111, label: 'node-1-1-1' },
            { value: 112, label: 'node-1-1-2' },
          ],
        },
        {
          value: 12,
          label: 'node-1-2',
          children: [
            { value: 121, label: 'node-1-2-1' },
            { value: 122, label: 'node-1-2-2' },
          ],
        },
      ],
    },
  ];

  const result = array.walkTree(treeData, {
    nodeCallback: (node, parent) => {
      node.level = parent ? parent.level + 1 : 0;
    },
  });
  expect(result[0].level).toBe(0);
  expect(result[0].children[0].level).toBe(1);
});

const data = [
  { id: 1, parent: 0, text: "Top-level comment 1" },
  { id: 2, parent: 0, text: "Top-level comment 2" },
  { id: 3, parent: 1, text: "Reply to Top-level comment 1" },
  { id: 4, parent: 3, text: "Reply to Reply to Top-level comment 1" },
];

/**
 * Restructure the flat data array into a nested array.
 *
 * @param {array} data
 * @returns {array}
 */
function restructureArray(data) {
  const dataMap = {};
  // Create an array to hold the root elements
  const root = [];
  data.forEach(item => {
    dataMap[item.id] = {
      ...item,
      children: []
    }
  });
  console.log('dataMap', dataMap)
  data.forEach(item => {
    const parent = dataMap[item.parent];
    console.log('item parent', item.parent)
    console.log('parent', parent)

    if (parent) {
      parent.children.push(dataMap[item.id])
    }
    else {
      root.push(dataMap[item.id]);
    }
  });
  return root;
}

const result = restructureArray(data);

// Output the resut array as a tree.
console.log(JSON.stringify(result, null, 2));

const isShallowEqual = (
  item1: Record<string, any>,
  item2: Record<string, any>
) => {
  const keys1 = Object.keys(item1);
  const keys2 = Object.keys(item2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (item1[key] !== item2[key]) {
      return false;
    }
  }

  return true;
};

export default isShallowEqual;

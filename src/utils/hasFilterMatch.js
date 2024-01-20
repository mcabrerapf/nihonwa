const hasFilterMatch = (filter, key, item) => {
  if (!filter.length) return true;
  let hasMatch = false;
  item[key].forEach((option) => {
    if (!!filter.find((filterOption) => filterOption === option))
      hasMatch = true;
  });
  return hasMatch;
};

export default hasFilterMatch;

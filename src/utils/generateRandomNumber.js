const generateRandomNumber = (min = 0, max = 100, excludes = []) => {
  if (min === max) return min;
  const difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand += min;
  if (excludes.includes(rand)) return generateRandomNumber(min, max, excludes);
  return rand;
};

export default generateRandomNumber;

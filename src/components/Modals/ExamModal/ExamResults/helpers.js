const getScoreColor = (score) => {
  if (score > 79) return ' green';
  if (score > 59) return '';
  return ' red';
};

export {
  getScoreColor,
};

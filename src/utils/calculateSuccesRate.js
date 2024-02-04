function calculateSuccessRate(hits, misses) {
  if (misses === 0) return 100;
  const totalAttempts = hits + misses;
  if (totalAttempts === 0) return 100;
  const successRate = (hits / totalAttempts) * 100;
  return Number(successRate.toFixed());
}

export default calculateSuccessRate;

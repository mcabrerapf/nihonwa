function calculateSuccessRate(hits, misses) {
  if (hits === misses) return 100;

  if (hits >= 0 && misses >= 0) {
    const totalAttempts = hits + misses;
    const successRate = (hits / totalAttempts) * 100;
    return Number(successRate.toFixed());
  }
  return 100;
}

export default calculateSuccessRate;

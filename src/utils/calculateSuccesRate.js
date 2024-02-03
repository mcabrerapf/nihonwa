function calculateSuccessRate(hit, miss) {
  if (hit === miss) return 100;
  const defaultedHit = hit - 1;
  const defaultedMiss = miss - 1;
  if (hit >= 0 && miss >= 0) {
    const totalAttempts = defaultedHit + defaultedMiss;
    const successRate = (defaultedHit / totalAttempts) * 100;
    return Number(successRate.toFixed());
  }
  return 100;
}

export default calculateSuccessRate;

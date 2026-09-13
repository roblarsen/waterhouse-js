function factors(num: number): number[] {
  const value: number = Math.trunc(Math.abs(num));

  if (value < 2) {
    return [];
  }

  const result: number[] = [];

  for (let i = 1; i <= Math.sqrt(value); i += 1) {
    if (value % i === 0) {
      result.push(i);

      const pairedFactor = value / i;
      if (pairedFactor !== i) {
        result.push(pairedFactor);
      }
    }
  }

  return [...new Set(result)].sort((left, right) => left - right);
}

export default factors;

function factorial(num: bigint | number): bigint {
  const n: bigint = typeof num === 'bigint' ? num : BigInt(num);
  let result = 1n;

  for (let current = n; current > 0n; current -= 1n) {
    result *= current;
  }

  return result;
}

export default factorial;

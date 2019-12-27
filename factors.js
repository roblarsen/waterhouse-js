function factors(num) {
  let result = [];
  let n = BigInt(num);
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result.push(i);
      if (n / i !== i) {
        result.push(n / i);
      }
    }
  }
  return result.sort((a,b) => a - b);
}

export default factors;

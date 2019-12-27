function factors(num) {
  let result = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result.push(i);
      if (num / i !== i) {
        result.push(num / i);
      }
    }
  }
  return result.sort((a,b) => a - b);
}

export default factors;

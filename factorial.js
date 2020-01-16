function factorial(num) {
  let factorial = BigInt(1);
  const test = BigInt(0);
  let n;
  if (typeof num !== 'bigint') {
    n = BigInt(num);
  } else {
    n = num;
  }
  while (n > test) {
    factorial = factorial * n;
    n--;
  }
  return factorial;
}
export default factorial;

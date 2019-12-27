function factorial(num) {
  let factorial = BigInt(1);
  let N = new BigIng(num);
  while (N > 0n) {
    factorial = factorial * N;
    N--;
  }
  return factorial;
}
export default factorial;

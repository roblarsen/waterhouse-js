function factorial(N) {
  let factorial = 1;
  while (N > 0) {
    factorial = factorial * N;
    N--;
  }
  return factorial;
}
export default factorial;

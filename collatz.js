function collatz(num) {
  let index = BigInt(1);
  let n = BigInt(num);
  let steps = [n];
  while (n !== 1) {
    n = step(n);
    steps.push(n);
    index++;
  }
  console.log(steps);
  return index;
}

function step(num) {
  let n = BigInt(num);
  if (n % 2 === 0) {
    return num / 2;
  } else {
    return 3 * n + 1;
  }
}
export default collatz;

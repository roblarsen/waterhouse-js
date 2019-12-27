function collatz(num) {
  if (typeof num !== "bigint"){
    let n = BigInt(num);  
  }
  let index = BigInt(1);
  let steps = [n];
  while (n !== 1n) {
    n = step(n);
    steps.push(n);
    index++;
  }
  console.log(steps);
  return index;
}

function step(num) {
  let n = BigInt(num);
  if (n % 2 === 0n) {
    return n / 2n;
  } else {
    return 3n * n + 1n;
  }
}
export default collatz;

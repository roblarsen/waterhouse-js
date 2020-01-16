function collatz(num) {
  let n;
  let index = BigInt(1);
  let steps = [n];
  const test = BigInt(1);

  if (typeof num !== "bigint"){
     n = BigInt(num);
  } else {
     n = num;
  }
  while (n !== test ) {
    n = step(n);
    steps.push(n);
    index++;
  }
  console.log(steps);
  return index;
}

function step(num) {
  let n = BigInt(num);
  const test = BigInt(0);
  if (n % 2 === test) {
    return n / BigInt(2);
  } else {
    return BigInt(3) * n + BigInt(1);
  }
}
export default collatz;

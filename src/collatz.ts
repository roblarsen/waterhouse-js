function step(num: bigint): bigint {
  if (num % 2n === 0n) {
    return num / 2n;
  }

  return 3n * num + 1n;
}

function collatz(num: bigint | number): bigint {
  let n: bigint = typeof num === 'bigint' ? num : BigInt(num);
  let index = 1n;

  if (n === 0n) {
    return 0n;
  }

  while (n !== 1n) {
    n = step(n);
    index += 1n;
  }

  return index;
}

export default collatz;

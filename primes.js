// Returns true if passed BigInt is a prime number
function isPrime(p) {
  for (let i = 2n; i * i <= p; i++) {
    if (p % i === 0n) return false;
  }
  return true;
}

// Takes a BigInt as an argument, returns nth prime number as BigInt
function nthPrime(nth) {
  let maybePrime = 2n;
  let prime = 0n;

  while (nth >= 0n) {
    if (isPrime(maybePrime)) {
      nth--;
      prime = maybePrime;
    }
    maybePrime++;
  }

  return prime;
}

nthPrime(20n)
// ↪ 73n

//for notes, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

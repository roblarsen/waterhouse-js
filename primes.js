function isPrime(num) {
  if (typeof num !== "bigint"){
    num = BigInt(num);
  }
  for (let i = BigInt(2); i * i <= num; i++) {
    if (num % i === 0n) {
      return false;
    }
  }
  return true;
}

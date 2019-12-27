function isPrime(num) {
  for (let i = 2; i * i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

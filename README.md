# WaterhouseJS

Math and JavaScript, I guess?

## Installation

Requires Node.js 20 or newer.

```bash
npm install
```

## Usage

```ts
import {
  aperys,
  factorial,
  factors,
  isPrime,
  Utilities,
  collatz,
  triangle,
  generateTriangleNumbers,
} from 'waterhouse-js';

console.log(aperys);
console.log(factorial(5n));
console.log(factors(36));
console.log(isPrime(13));
console.log(collatz(10));
console.log(triangle(5));
console.log(generateTriangleNumbers(5));

const utils = new Utilities();
console.log(utils.radians(180));
console.log(utils.sec(0));
```

## Development

```bash
npm run typecheck
npm run build
npm run dev
```

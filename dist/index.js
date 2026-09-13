"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Utilities: () => utilities_default,
  aperys: () => aperys,
  collatz: () => collatz_default,
  factorial: () => factorial_default,
  factors: () => factors_default,
  generateTriangleNumbers: () => generateTriangleNumbers,
  isPrime: () => isPrime,
  triangle: () => triangle
});
module.exports = __toCommonJS(index_exports);

// src/constants.ts
var aperys = 1.202056903159594;

// src/factorial.ts
function factorial(num) {
  const n = typeof num === "bigint" ? num : BigInt(num);
  let result = 1n;
  for (let current = n; current > 0n; current -= 1n) {
    result *= current;
  }
  return result;
}
var factorial_default = factorial;

// src/factors.ts
function factors(num) {
  const value = Math.trunc(Math.abs(num));
  if (value < 2) {
    return [];
  }
  const result = [];
  for (let i = 1; i <= Math.sqrt(value); i += 1) {
    if (value % i === 0) {
      result.push(i);
      const pairedFactor = value / i;
      if (pairedFactor !== i) {
        result.push(pairedFactor);
      }
    }
  }
  return [...new Set(result)].sort((left, right) => left - right);
}
var factors_default = factors;

// src/primes.ts
function isPrime(num) {
  if (!Number.isInteger(num) || num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (let divisor = 3; divisor <= Math.sqrt(num); divisor += 2) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
}

// src/utilities.ts
var Utilities = class {
  cosec(num) {
    return 1 / Math.sin(num);
  }
  sec(num) {
    return 1 / Math.cos(num);
  }
  radians(degrees) {
    return degrees * (Math.PI / 180);
  }
  degrees(radians) {
    return radians * (180 / Math.PI);
  }
};
var utilities_default = Utilities;

// src/collatz.ts
function step(num) {
  if (num % 2n === 0n) {
    return num / 2n;
  }
  return 3n * num + 1n;
}
function collatz(num) {
  let n = typeof num === "bigint" ? num : BigInt(num);
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
var collatz_default = collatz;

// src/triangle-numbes.ts
function triangle(num) {
  return num * (num + 1) / 2;
}
function generateTriangleNumbers(num) {
  const triangles = [];
  for (let i = 1; i <= num; i += 1) {
    triangles.push(triangle(i));
  }
  return triangles;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Utilities,
  aperys,
  collatz,
  factorial,
  factors,
  generateTriangleNumbers,
  isPrime,
  triangle
});

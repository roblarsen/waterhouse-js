declare const aperys: 1.202056903159594;

declare function factorial(num: bigint | number): bigint;

declare function factors(num: number): number[];

declare function isPrime(num: number): boolean;

declare class Utilities {
    cosec(num: number): number;
    sec(num: number): number;
    radians(degrees: number): number;
    degrees(radians: number): number;
}

declare function collatz(num: bigint | number): bigint;

declare function triangle(num: number): number;
declare function generateTriangleNumbers(num: number): number[];

export { Utilities, aperys, collatz, factorial, factors, generateTriangleNumbers, isPrime, triangle };

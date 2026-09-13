export function triangle(num: number): number {
  return (num * (num + 1)) / 2;
}

export function generateTriangleNumbers(num: number): number[] {
  const triangles: number[] = [];

  for (let i = 1; i <= num; i += 1) {
    triangles.push(triangle(i));
  }

  return triangles;
}

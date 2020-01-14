function triangle(num) {
  return ((num) * (num + 1)) / 2;
}
function generateTriangleNumbers(num) {
  let triangles = [];
  for (let i = 1; i < num; i++) {
    triangles.push(triangle(i));
  }
  return triangles;
}

export {triangle, generateTriangleNumbers};


function collatz(num) {
  let index = 1;
  let steps = [num];
  while (num !== 1) {
    num = step(num);
    steps.push(num);
    index++;
  }
  console.log(steps);
  return index;
}

function step(num) {
  if (num % 2 === 0) {
    return num / 2;
  } else {
    return 3 * num + 1;
  }
}
export default collatz;

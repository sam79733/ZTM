// Find Factorial

function findFactorialWithRecursion(value) {
  if (value == 1 || value == 0) {
    return 1;
  }
  return value * findFactorialWithRecursion(value - 1);
}

//console.log(findFactorialWithRecursion(10));

function findFactorialWithIteration(value) {
  let result = 1;
  while (value > 1) {
    result = result * value;
    value--;
  }
  return result;
}

console.log(findFactorialWithIteration(5));

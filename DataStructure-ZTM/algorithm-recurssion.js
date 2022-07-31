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

// Print fibonnacci series upto given number

function fibonacciWithouRecursion(number) {
  let first = 0;
  let second = 1;
  console.log(first);
  console.log(second);
  for (let index = 0; index <= number - 2; index++) {
    const nextNum = first + second;
    first = second;
    second = nextNum;
    console.log(nextNum);
  }
}
// It will take O(n) time in worst case..

function fibonacciWithRecursion(number, hs) {
  hs = hs || {};

  if (number <= 1) {
    return number;
  } else if (hs[number]) {
    return hs[number];
  }

  const nextFib =
    fibonacciWithRecursion(number - 1, hs) +
    fibonacciWithRecursion(number - 2, hs);
  hs[number] = nextFib;
  return nextFib;
}

// Reverse a string through interation

let str = "Today is Sunday";

function reverseStringUsingInteration(str) {
  let stringArr = str.split("");
  let stackedChar = [];

  while (stringArr.length > 0) {
    stackedChar.push(stringArr.pop());
  }

  return stackedChar.join("");
}

function reverseStringWithRecursion(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringWithRecursion(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseStringWithRecursion(str));

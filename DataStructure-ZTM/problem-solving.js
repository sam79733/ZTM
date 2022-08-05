// find 2nd maximum using single loop, O(n)

const numbers = [
  10, 42, 45, 32, 67, 43, 87, 56, 86, 23, 98, 91, 92, 100, 101, 133, 133, 120,
];

function find2ndMax(arr) {
  let firstMax = Number.MIN_SAFE_INTEGER;
  let secondMax = Number.MIN_SAFE_INTEGER;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > firstMax) {
      secondMax = firstMax;
      firstMax = arr[index];
    } else if (secondMax <= arr[index]) {
      secondMax = arr[index];
    }
  }
  return secondMax;
}

// find maximum sub array

const num = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSumSubArray(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let curr = 0;

  for (let index = 0; index < arr.length; index++) {
    curr = Math.max(curr + arr[index], arr[index]);
    console.log("curr ", curr);
    max = Math.max(curr, max);
    console.log("max ", max);
  }
  return max;
}

console.log(maxSumSubArray(num));

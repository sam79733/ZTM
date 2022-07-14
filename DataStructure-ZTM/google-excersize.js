//Contains common elements
// input - two array
// output - return "true" if they contains common element else "false"

const arr1 = ["a", "b", "g", "h", "u"];
const arr2 = ["j", "w", "g"];

function containsCommonElement(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        return true;
      }
    }
  }
  return false;
}

let ans = containsCommonElement(arr1, arr2);
console.log(ans);

// time- O(n^2) ---- basically it would be O(arr1.length * arr2.length)
// space- O(1)

// lets simplyfy the code so that time complexity can be reduced
// We can store value of one array in hashmap and assign the value true
// Now we can iterate over 2nd array and check if ele exist in hashmap and return true/false

function containsCommonElementWithHasmap(arr1, arr2) {
  let hashmap = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!hashmap[arr1[i]]) {
      hashmap[arr1[i]] = true;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (hashmap[arr2[j]]) {
      return true;
    }
  }

  return false;
}

let ans1 = containsCommonElementWithHasmap(arr1, arr2);
console.log(ans1);

// Time - O(n) -- O(arr1.length + arr2.length)
// Space - O(n) -- added an object to make the tally

// To make code more readable, we can use builtin function as per progrmming language.

function constainsCommonElementWithBuiltIn(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

let ans2 = constainsCommonElementWithBuiltIn(arr1, arr2);
arr1, arr2;
console.log(ans2);

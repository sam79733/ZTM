//Implement Array data structure
// however Interviewer is not goind to ask to implement Array

class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    this.shiftRestElements(index);
    this.length--;
  }

  shiftRestElements(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
  }
}

const myArray = new Array();

myArray.push("Hi");
myArray.push("How");
myArray.push("are");
myArray.push("you?");
console.log(myArray.data);

myArray.delete(2);

// Reverse a string
// String is array of characters. We have to convert it into array and make reverse loop.
// Most of the time if we get string manipulation related question we should convert it into array

const str = "ardnenayg si eman ym";

function reverseString1(str) {
  if (!str || str.length < 2 || typeof str != "string") {
    return "Something is wrong";
  }
  const backword = [];
  for (let index = str.length - 1; index >= 0; index--) {
    backword.push(str[index]);
  }

  return backword.join("");
}

function reverseString2(str) {
  return str.split("").reverse().join("");
}

const result = reverseString2(str);
console.log(result);

// merge two sorted array

const arr1 = [3, 10];
const arr2 = [2, 4, 16, 17];

function mergeTwoSortedArray(arr1, arr2) {
  const sortedArray = [];

  if (arr1.length == 0) {
    return arr2;
  }
  if (arr2.length == 0) {
    return arr1;
  }

  let item1 = arr1[0];
  let item2 = arr2[0];

  let i = 1;
  let j = 1;

  while (item1 || item2) {
    console.log(item1, item2);
    if (!item2 || item1 < item2) {
      sortedArray.push(item1);
      item1 = arr1[i];
      i++;
    } else {
      sortedArray.push(item2);
      item2 = arr2[j];
      j++;
    }
  }

  return sortedArray;
}

const sortedArray = mergeTwoSortedArray(arr1, arr2);
console.log(sortedArray);

// Bubble sort

const numbers = [
  98, 11, 34, 32, 12, 2, 3, 56, 77, 94, 73, 4, 2, 1, 0, 4, 5, 8, 77, 57, 29,
];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// Merge sort

function MergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(MergeSort(left), MergeSort(right));
}

function merge(left, right) {
  let i = 0;
  let j = 0;

  const result = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Check insertion sort
// check quick sort

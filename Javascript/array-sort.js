function sortArray(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        // Swap the elements at indices i and j
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

// Example usage:

const array = [5, 3, 2, 1, 4];
const sortedArray = sortArray(array);

console.log(sortedArray); // [1, 2, 3, 4, 5]

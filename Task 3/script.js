function Contains(arr, num) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === num) {
      return true;
    }
  }
  return false;
}

console.log("[1, 2, 3, 4, 5] contains 3 ? => ", Contains([1, 2, 3, 4, 5], 3));
console.log("[1, 1, 2, 1, 1] contains 3 ? => ", Contains([1, 1, 2, 1, 1], 3));
console.log("[5, 5, 5, 6] contains 5 ? => ", Contains([5, 5, 5, 6], 5));
console.log("[] contains 5 ? => ", Contains([], 5));

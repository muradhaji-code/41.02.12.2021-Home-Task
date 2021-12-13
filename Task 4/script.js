function isAllFactors(arr, num) {
  for (let index = 0; index < arr.length; index++) {
    if (num % arr[index] !== 0) {
      return false;
    }
  }
  return true;
}

console.log(
  "[2, 3, 4] is all factors of 12 ? => ",
  isAllFactors([2, 3, 4], 12)
);
console.log(
  "[1, 2, 3, 8] is all factors of 12 ? => ",
  isAllFactors([1, 2, 3, 8], 12)
);
console.log(
  "[1, 2, 50] is all factors of 100 ? => ",
  isAllFactors([1, 2, 50], 100)
);
console.log("[3, 6] is all factors of 9 ? => ", isAllFactors([3, 6], 9));

function GetSequence(start, end) {
  let newArr = [];
  for (let num = start; num <= end; num++) {
    newArr.push(num);
  }
  return newArr;
}

console.log("GetSequence(1, 5) => ", GetSequence(1, 5));
console.log("GetSequence(98, 100) => ", GetSequence(98, 100));
console.log("GetSequence(1000, 1000) => ", GetSequence(1000, 1000));

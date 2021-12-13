let array = [32, 25, 85, 89, 45, 76, 7, 41, 2, 12];

// SubTask a
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

// SubTask b
let maxElement = array[0];
array.forEach((element) => {
  if (element > maxElement) {
    maxElement = element;
  }
});
console.log("maxElement: ", maxElement);

// SubTask c
array.push(15);

// SubTask d
array.shift();

// SubTask e
array.sort((a, b) => a - b);
console.log(array[array.length - 1]);

// SubTask f
array.splice(3, 0, 43);

// SubTask g
console.log(array.slice(3, array.length));

// SubTask h
array.forEach((element) => console.log(element));

// SubTask i
for (let index = 0; index < array.length; index++) {
  if (array[index] > 40) {
    console.log(array[index]);
  }
}
array
  .filter((element) => element > 40)
  .forEach((element) => console.log(element));

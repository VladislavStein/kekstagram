function sortBy(arr, key) {
  const result = [];
  arr.forEach(el => result.push(Object.entries(el)));
  return result.sort((a, b) => {
    const valA = a.find(([k]) => k === key)[1];
    const valB = b.find(([k]) => k === key)[1];
    return valA - valB;
  })
  .map(el => Object.fromEntries(el));
}


const points = [{x: 5, y: 8}, {x: 9, y: 0}, {x: 1, y: 4}, {x: -6, y: 12}];
console.log(sortBy(points, 'x'));

// console.log(sortBy(points, "x"));
// [{x: -6, y: 12}, {x: 1, y: 4}, {x: 5, y: 8}, {x: 9, y: 0}]

// console.log(sortBy(points, "y"));
// [{x: 9, y: 0}, {x: 1, y: 4}, {x: 5, y: 8}, {x: -6, y: 12}]

const users = [
  { name: "A", age: 11, location: "Qwe" },
  { name: "B", age: 54, location: "Asd" },
  { name: "C", age: 23, location: "Zxc" },
];

// console.log(sortBy(users, "location"));
// [
//   { name: "B", age: 54, location: "Asd" },
//   { name: "A", age: 11, location: "Qwe" },
//   { name: "C", age: 23, location: "Zxc" },
// ]

// console.log(sortBy(users, "age"));
// [
//   { name: "A", age: 11, location: "Qwe" },
//   { name: "C", age: 23, location: "Zxc" },
//   { name: "B", age: 54, location: "Asd" },
// ]

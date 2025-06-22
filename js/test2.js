const result = [];
const names = [];

function bestResults(attempts) {
  attempts.forEach(element => {
    if (!names.includes(element.name)) {
      names.push(element.name);
      result.push(element)
    } else {
      if (element.score === ) {

      } else if () {

      }
    }
  });
  return result;
}

const output = [
  {
    name: "Женя",
    score: 55,
    date: "01.10.2021",
  },
  {
    name: "Саша",
    score: 78,
    date: "28.09.2021",
  },
];

console.log(bestResults(output));

// Пустой массив для имен
// Если в массиве нет имени, добавляю объект и имя в массив
// Если есть имя, то сравниваю их скор и если скор больше, то удаляю элемент и добавляю новый

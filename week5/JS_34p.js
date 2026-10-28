const fruits = ["사과", "오렌지", "배", "딸기"];

console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits.at(0));
console.log(fruits.at(-1));


const fruits2 = ["사과", "오렌지", "배"];

fruits2[3] = "딸기";

fruits2.unshift("수박");

fruits2.push("포도");

console.log(fruits2);
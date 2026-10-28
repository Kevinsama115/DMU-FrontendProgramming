type Operation = (x: number, y: number) => number;

const plus: Operation = (a, b) => a + b;
const minus: Operation = (a, b) => a - b;

console.log(plus(5, 3));
console.log(minus(10, 7));

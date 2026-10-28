interface Calculator {
    plus(a: number, b: number): number;
    minus(a: number, b: number): number;
}

const myCalculator: Calculator = {
    plus(a, b) {
        return a + b;
    },
    minus(a, b) {
        return a - b;
    }
};

console.log(myCalculator.plus(10, 5));
console.log(myCalculator.minus(10, 5));

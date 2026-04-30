interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply: (a: number, b: number) => number;  // Alternative syntax
}

const calc: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}

calc.add(10, 5);        // Output: 15
calc.subtract(10, 5);
calc.multiply(10, 5);
console.log(calc);
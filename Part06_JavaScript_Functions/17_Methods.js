//Methods :- Action that can be performed on the objects :-

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    },
    power: function (a, b) {
        return Math.pow(a, b);
    }
};

console.log(calculator);

// Accessing methods using dot notation
console.log(calculator.add(1, 2));       // Output: 3
console.log(calculator.subtract(5, 3));  // Output: 2
console.log(calculator.multiply(4, 7));  // Output: 28
console.log(calculator.divide(10, 2));   // Output: 5
console.log(calculator.power(2, 3));     // Output: 8
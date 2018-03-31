let numbers = [1, 2, 4, 6, 8, 9];

const add = (op1,op2) => op1 + op2;
const sum = (numbers) => numbers.reduce(add, 0);

sum(numbers); // 30
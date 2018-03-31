const privateFactorial = {};
const factorial = (num) => {
    if(privateFactorial[num]) {
        return privateFactorial[num];
    }
    if(num < 0) {
        return -1;
    } else if (num == 0) {
      return 1;
    } else {
      return (privateFactorial[num] = num * factorial(num - 1));
    }
};

console.time(); // API to track the time a function takes to execute.
factorial(150); // 8.159152832478977e+47
console.timeEnd(); // Returns the ms taken to end the execution.
// default: 0.072998046875ms

console.time(); // API to track the time a function takes to execute.
factorial(150); // 8.159152832478977e+47
console.timeEnd(); // Returns the ms taken to end the execution.
// default: 0.0048828125ms
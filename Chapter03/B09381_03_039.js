const factorial = (number, accumulator = 1) => {
    if(number < 2) {
        return accumulator;
    }
    return factorial(number - 1, number * accumulator);
};

const factorialMemo = memoize(factorial);

console.time();
factorialMemo(150);    // 5.7133839564458575e+262
console.timeEnd();    // default: 0.094970703125ms

console.time();
factorialMemo(150);    // 5.7133839564458575e+262
console.timeEnd();    // default: 0.008056640625ms
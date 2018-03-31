const factorial = (number, accumulator = 1) => {
    if(number < 2) {
        return accumulator;
    }
    return factorial(number - 1, number * accumulator);
}
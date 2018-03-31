const factorial = (num) => {
    if(num < 0) {
        return -1;
    } else if (num == 0) {
      return 1;
    } else {
      return (num * factorial(num - 1));
    }
};

factorial(10); // 3628800
factorial(11); // 39916800
factorial(1000000) // Maximum call stack size exceeded
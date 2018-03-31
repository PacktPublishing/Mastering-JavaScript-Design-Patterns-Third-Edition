let numbers = [1, 2, 4, 6, 8, 9];

function sum(numbers) {
    var total = 0;
    for(let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return numbers;
}

sum(numbers); // 30;
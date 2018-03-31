let numbers = [1, 2, 3, 4];

const duplicateValuesInArray = (numbersArray) => {
    for(let i = 0, len = numbersArray.length; i < len; i++) {
        numbersArray[i] = numbersArray[i] * 2;
    }
}

duplicateValuesInArray(numbers); // [2, 4, 6, 8]
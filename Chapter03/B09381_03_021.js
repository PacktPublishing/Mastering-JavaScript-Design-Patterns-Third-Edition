const duplicate = (number) => number * 2;

const duplicateValuesInArray = (numbersArray) => {
 return numbersArray.map(duplicate);
};

let numbers = [1, 2, 3, 4];
duplicateValuesInArray(numbers);
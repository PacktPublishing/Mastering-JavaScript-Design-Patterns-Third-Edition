var arr = [];

console.log(arr);
// []

console.log(arr.constructor);
// ƒ Array() { [native code] }

console.log(arr.__proto__.constructor);
// ƒ Array() { [native code] }

console.log(arr.__proto__.__proto__.constructor);
// ƒ Object() { [native code] }

console.log(arr.__proto__.__proto__.__proto__.constructor);
// Uncaught TypeError: Cannot read property 'constructor' of null

var obj = {};

console.log(obj);

// {}

console.log(obj.constructor);

// ƒ Object() { [native code] }

console.log(obj.__proto__.constructor);

// ƒ Object() { [native code] }

console.log(obj.__proto__.__proto__.constructor);

// Uncaught TypeError: Cannot read property 'constructor' of null

function Mammal() {}
Mammal.prototype.makeSound = function () {
  // do some sound
};

function Dog() {}
Dog.prototype = new Mammal();
Dog.prototype.constructor = Dog;
var dog = new Dog();

console.log(dog);
// Dog {}
console.log(dog.__proto__.constructor);
// ƒ Mammal() {}
console.log(dog.__proto__.__proto__.constructor);
// ƒ Mammal() {}
console.log(dog.__proto__.__proto__.__proto__.constructor);
//ƒ Object() { [native code] }

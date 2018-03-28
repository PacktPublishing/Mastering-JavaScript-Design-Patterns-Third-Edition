class Mammal {
  makeSound() {
    // do some sound
  }
}

class Dog extends Mammal{}

var dog = new Dog();

console.log(dog);
// Dog {}
console.log(dog.__proto__.constructor);
// class Dog extends Mammal{}
console.log(dog.__proto__.__proto__.constructor);
/*
 class Mammal {
   makeSound() {
     // do some sound
   }
 }
*/
console.log(dog.__proto__.__proto__.__proto__.constructor);
//ƒ Object() { [native code] }

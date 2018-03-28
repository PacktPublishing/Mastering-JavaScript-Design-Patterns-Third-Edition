class Bicycle {
  constructor() {
    this._speed = 0;
    this._speedStep = 10;
  }
  accelerate() {
    this._speed += this._speedStep;
  }
  slowDown() {
    this._speed -= this._speedStep;
  }
}

var bicycle = new Bicycle();

console.log(bicycle._speed);
// 0
console.log(bicycle._speedStep);
// 10
console.log(bicycle.accelerate());
// undefined
console.log(bicycle._speed);
// 10

// But you can change the values from outside
bicycle.speed = 100;

console.log(bicycle.accelerate());
// undefined
console.log(bicycle._speed);
// 110

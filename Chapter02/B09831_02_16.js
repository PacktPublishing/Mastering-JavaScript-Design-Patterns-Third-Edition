const _speed = new WeakMap();
const _speedStep = new WeakMap();
class Bicycle {
  constructor() {
    _speed.set(this, 0);
    _speedStep.set(this, 10);
  }
  getSpeed() {
    return _speed.get(this);
  }
  accelerate() {
    var speed = this.getSpeed();
    var speedStep = _speedStep.get(this);
    _speed.set(this, speed + speedStep);
  }
  slowDown() {
    var speed = this.getSpeed();
    var speedStep = _speedStep.get(this);
    _speed.set(this, speed - speedStep);
  }
}

var bicycle = new Bicycle();

console.log(bicycle.getSpeed());
// 0
console.log(bicycle.accelerate());
// undefined
console.log(bicycle.getSpeed());
// 10

bicycle._speed = 100;

console.log(bicycle.getSpeed());
// 10
console.log(bicycle.accelerate());
// undefined
console.log(bicycle.getSpeed());
// 20

// Check that all the instances share the methods.
var bicycle2 = new Bicycle();

console.log(bicycle.getSpeed === bicycle2.getSpeed);
// true

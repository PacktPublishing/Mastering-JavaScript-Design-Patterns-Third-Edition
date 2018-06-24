import Quackable from './Quackable';
import Duck from './Duck';

class RubberDuck extends Quackable(Duck) {
    display() {
        console.log('RubberDuck show')
    }
    quack() {
        console.log('Iiiiaaa!');
    }
}

export default RubberDuck;
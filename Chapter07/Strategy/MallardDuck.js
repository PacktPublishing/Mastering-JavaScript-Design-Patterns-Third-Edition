import Quackable from './Quackable';
import Flyable from './Flyable';

class MallardDuck extends Quackable(Flyable(Duck)) {
    display() {
        console.log('MallardDuck show');
    }
    fly() {
        console.log('Fly 100 miles');
    }
}

export default MallardDuck;
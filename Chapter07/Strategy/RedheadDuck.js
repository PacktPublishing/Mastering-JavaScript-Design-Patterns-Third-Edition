import Quackable from './Quackable';
import Flyable from './Flyable';
import Duck from './Duck';

class RedheadDuck extends Quackable(Flyable(Duck)) {
    display() {
        console.log('RedheadDuck show');
    }
    fly() {
        console.log('Fly 30 miles');
    }
}

export default RedheadDuck;
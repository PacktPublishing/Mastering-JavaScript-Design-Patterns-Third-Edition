import Switchable from './Switchable';
import DummyConstructor from './DummyConstructor';

class PopcornPopper extends Switchable(DummyConstructor) {
    on() {
      console.log("PopcornPopper is on!");
    }
  
    off() {
      console.log("PopcornPopper is off!");
    }
  
    pop() {
      console.log("Yum!Yum!");
    }
}

export default PopcornPopper;
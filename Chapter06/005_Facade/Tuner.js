import Switchable from './Switchable';
import DummyConstructor from './DummyConstructor';

class Tuner extends Switchable(DummyConstructor) {
    constructor() {
      this.amplifier = null;
      this.frequency = 0;
    }
  
    on() {
      console.log("Tuner is on!");
    }
  
    off() {
      console.log("Tuner is off!");
    }
  
    setAm() {
      console.log("Tuner AM!");
    }
  
    setFm() {
      console.log("Tuner FM!");
    }
  
    setFrequency(frequency) {
      this.frequency = frequency;
      console.log("Tuner frequency changed to " + frequency);
    }
}

export default Tuner;
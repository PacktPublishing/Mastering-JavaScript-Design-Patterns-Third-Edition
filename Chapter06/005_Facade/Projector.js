import Switchable from './Switchable';
import DummyConstructor from './DummyConstructor';

class Projector extends Switchable(DummyConstructor) {
    constructor() {
      super();
      this.wideScreenMode = false;
    }
  
    on() {
      console.log("Projector is on!");
    }
  
    off() {
      console.log("Projector is off!");
    }
  
    setWideScreenMode() {
      this.wideScreenMode = true;
      console.log("Projector now is on wide screen mode!");
    }
}

export default Projector;
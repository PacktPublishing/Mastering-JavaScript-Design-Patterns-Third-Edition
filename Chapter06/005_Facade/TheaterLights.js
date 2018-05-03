import Switchable from './Switchable';
import DummyConstructor from './DummyConstructor';

class TheaterLights extends Switchable(DummyConstructor) {
    on() {
      console.log("The lights are on!");
    }
  
    off() {
      console.log("The lights are off!");
    }
}

export default TheaterLights;
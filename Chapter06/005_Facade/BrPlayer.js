import Switchable from './Switchable';
import Playable from './Playable';
import DummyConstructor from './DummyConstructor';

class BrPlayer extends Switchable(Playable(DummyConstructor)) {
    on() {
      console.log("BRPlayer is on!");
    }
  
    off() {
      console.log("BRPlayer is off!");
    }
  
    eject() {
      console.log("Eject BR!");
    }
  
    play(movie) {
      console.log("Playing " + movie.name);
    }
  
    stop() {
      console.log("Stop BRPlayer!");
    }
}

export default BrPlayer;
import Switchable from './Switchable';
import Playable from './Playable';
import DummyConstructor from './DummyConstructor';

class Mp3Player extends Switchable(Playable(DummyConstructor)) {
    on() {
      console.log("Mp3Player is on!");
    }
  
    off() {
      console.log("Mp3Player is off!");
    }
  
    play(playlist) {
      console.log("Playing " + playlist.sName);
    }
  
    stop() {
      console.log("Stop MP3Player!");
    }
}

export default Mp3Player;
import Switchable from './Switchable';
import DummyConstructor from './DummyConstructor';

class Amplifier extends Switchable(DummyConstructor) {
    constructor() {
      super();
      this.volume = 0;
      this.brPlayer = null;
      this.mp3Player = null;
      this.tuner = null;
      this.surroundSound = false;
      this.stereoSound = false;
    }
  
    on() {
      console.log("Amplifier is on!");
    }
  
    off() {
      console.log("Amplifier is off!");
    }
  
    setVolume(volume) {
      this.volume = volume;
      console.log("Volume change to " + volume);
    }
  
    setBrPlayer(brPlayer) {
      this.brPlayer = brPlayer;
      console.log("Plugged BlueRay Player to Amplifier!");
    }
  
    setMP3Player(mp3Player) {
      this.mp3Player = mp3Player;
      console.log("Plugged MP3 Player to Amplifier!");
    }
  
    setTuner(tuner) {
      this.tuner = tuner;
      console.log("Plugged on Tuner to Amplifier!");
    }
  
    setSurroundSound() {
      this.surroundSound = true;
      console.log("Surround Mode is active!");
    }
  
    setStereoSound() {
      this.stereoSound = true;
      console.log("Stereo Mode is active!");
    }
}
  
export default Amplifier;
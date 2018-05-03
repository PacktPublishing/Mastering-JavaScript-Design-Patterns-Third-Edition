class HomeTheaterFacade {
    constructor({ amplifier = null, tuner = null, brPlayer = null, mp3Player = null, projector = null, theaterLights = null, screen = null, popcornPopper = null}) {
      this.amplifier = amplifier;
      this.tuner = tuner;
      this.brPlayer = brPlayer;
      this.mp3Player = mp3Player;
      this.projector = projector;
      this.theaterLights = theaterLights;
      this.screen = screen;
      this.popcornPopper = popcornPopper;
    }
  
    watchMovie(movie) {
      console.log('Get ready to watch a movie...');
  
      this.popcornPopper.on();
      this.popcornPopper.pop();
  
      this.theaterLights.off();
  
      this.screen.down();
  
      this.projector.on();
      this.projector.setWideScreenMode();
  
      this.amplifier.on();
      this.amplifier.setBrPlayer(this.dvdPlayer);
      this.amplifier.setSurroundSound();
      this.amplifier.setVolume(5);
  
      this.brPlayer.on();
      this.brPlayer.play(movie);
    }
  
    endMovie() {
      console.log("Shutting movie theater down...");
      this.popcornPopper.off();
  
      this.theaterLights.on();
  
      this.screen.up();
  
      this.projector.off();
  
      this.amplifier.off();
  
      this.brPlayer.stop();
      this.brPlayer.eject();
      this.brPlayer.off();
    }
  
    listenToMP3(playlist) {
      console.log("Start listening your music...");
  
      this.amplifier.on();
      this.amplifier.setCdPlayer(this.cdPlayer);
      this.amplifier.setStereoSound();
      this.amplifier.setVolume(5);
  
      this.mp3Player.on();
      this.mp3Player.play(playlist);
    }
  
    endMP3() {
      console.log("End listening your music or the playlist has finished!");
  
      this.amplifier.off();
  
      this.mp3Player.stop();
      this.mp3Player.off();
    }
  
    listenToRadio() {
      console.log("Start listening your favorite radio station...");
  
      this.amplifier.on();
      this.amplifier.setTuner(this.tuner);
      this.amplifier.setStereoSound();
      this.amplifier.setVolume(5);
  
      this.tuner.on();
      this.tuner.setFm();
      this.tuner.setFrequency(90.9);
    }
  
    endRadio() {
      console.log("End listening your favorite radio station...");
  
      this.amplifier.off();
  
      this.tuner.off();
    }
}

export default HomeTheaterFacade;
import HomeTheaterFacade from './HomeTheaterFacade';
import Amplifier from './Amplifier';
import BrPlayer from './BrPlayer';
import Mp3Player from './Mp3Player';
import Projector from './Projector';
import TheaterLights from './TheaterLights';
import Screen from './Screen';
import PopcornPopper from './PopcornPopper';

var oHomeTheaterFacade = new HomeTheaterFacade({
    amplifier: new Amplifier(),
    brPlayer: new BrPlayer(),
    mp3Player: new Mp3Player(),
    projector: new Projector(),
    theaterLights: new TheaterLights(),
    screen: new Screen(),
    popcornPopper: new PopcornPopper()
});
oHomeTheaterFacade.watchMovie(new Nikita());
oHomeTheaterFacade.endMovie();
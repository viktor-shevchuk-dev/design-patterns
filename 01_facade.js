class Amplifier {
  on() {
    console.log('Amplifier on');
  }
  setStreamingPlayer(player) {
    console.log('Amplifier setting streaming player to', player);
  }
  setSurroundSound() {
    console.log('Amplifier surround sound on');
  }
  setVolume(level) {
    console.log('Amplifier setting volume to', level);
  }
  off() {
    console.log('Amplifier off');
  }
}

class Tuner {
  on() {
    console.log('Tuner on');
  }
  setAm() {
    console.log('Tuner setting AM');
  }
  setFm() {
    console.log('Tuner setting FM');
  }
  off() {
    console.log('Tuner off');
  }
}

class DvdPlayer {
  on() {
    console.log('DVD Player on');
  }
  play(movie) {
    console.log('DVD Player playing', movie);
  }
  stop() {
    console.log('DVD Player stopped');
  }
  eject() {
    console.log('DVD Player eject');
  }
  off() {
    console.log('DVD Player off');
  }
}

class Projector {
  on() {
    console.log('Projector on');
  }
  wideScreenMode() {
    console.log('Projector in widescreen mode');
  }
  off() {
    console.log('Projector off');
  }
}

class TheaterLights {
  dim(level) {
    console.log('Theater Lights dimming to', level, '%');
  }
  on() {
    console.log('Theater Lights on');
  }
}

class Screen {
  down() {
    console.log('Screen going down');
  }
  up() {
    console.log('Screen going up');
  }
}

class PopcornPopper {
  on() {
    console.log('Popcorn Popper on');
  }
  pop() {
    console.log('Popcorn Popper popping popcorn!');
  }
  off() {
    console.log('Popcorn Popper off');
  }
}

class HomeTheaterFacade {
  constructor(amplifier, tuner, dvdPlayer, projector, screen, lights, popper) {
    this.amplifier = amplifier;
    this.tuner = tuner;
    this.dvdPlayer = dvdPlayer;
    this.projector = projector;
    this.screen = screen;
    this.lights = lights;
    this.popper = popper;
  }

  watchMovie(movie) {
    console.log('Get ready to watch a movie...');
    this.popper.on();
    this.popper.pop();
    this.lights.dim(10);
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amplifier.on();
    this.amplifier.setStreamingPlayer(this.dvdPlayer);
    this.amplifier.setSurroundSound();
    this.amplifier.setVolume(5);
    this.dvdPlayer.on();
    this.dvdPlayer.play(movie);
  }

  endMovie() {
    console.log('Shutting movie theater down...');
    this.popper.off();
    this.lights.on();
    this.screen.up();
    this.projector.off();
    this.amplifier.off();
    this.dvdPlayer.stop();
    this.dvdPlayer.eject();
    this.dvdPlayer.off();
  }
}

const homeTheater = new HomeTheaterFacade(
  new Amplifier(),
  new Tuner(),
  new DvdPlayer(),
  new Projector(),
  new Screen(),
  new TheaterLights(),
  new PopcornPopper()
);

homeTheater.watchMovie('Raiders of the Lost Ark');
homeTheater.endMovie();

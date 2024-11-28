class IObservable {
  add(_observer) {
    throw new Error('This method must be overridden');
  }
  remove(_observer) {
    throw new Error('This method must be overridden');
  }
  notify() {
    throw new Error('This method must be overridden');
  }
}
class IObserver {
  update() {
    throw new Error('This method must be overridden');
  }
}

class Observer extends IObserver {
  #observable;

  constructor(observable) {
    super();
    this.#observable = observable;
  }

  update() {
    const newTemperature = this.#observable.getTemperature();
    this.display(newTemperature);
  }
}

class Observable extends IObservable {
  #observers = [];

  add(observer) {
    this.#observers.push(observer);
  }

  remove(observer) {
    const index = this.#observers.indexOf(observer);
    if (index > -1) {
      this.#observers.splice(index, 1);
    }
  }

  notify() {
    this.#observers.forEach((observer) => observer.update());
  }
}

class WeatherStation extends Observable {
  #temperature = 0;

  constructor() {
    super();
  }

  setTemperature(newTemperature) {
    this.#temperature = newTemperature;
    this.notify();
  }

  getTemperature() {
    return this.#temperature;
  }
}

class PhoneDisplay extends Observer {
  display(temperature) {
    console.log(`Phone Display: I got updated temperature: ${temperature}`);
  }
}

class WindowDisplay extends Observer {
  display(temperature) {
    console.log(`Window Display: I got updated temperature: ${temperature}`);
  }
}

const weatherStation = new WeatherStation();

const phoneDisplay = new PhoneDisplay(weatherStation);
const windowDisplay = new WindowDisplay(weatherStation);

weatherStation.add(phoneDisplay);
weatherStation.add(windowDisplay);

weatherStation.setTemperature(26);
weatherStation.setTemperature(28);

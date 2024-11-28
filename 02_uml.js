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
  setState() {
    throw new Error('This method must be overridden');
  }
  getState() {
    throw new Error('This method must be overridden');
  }
}
class IObserver {
  update() {
    throw new Error('This method must be overridden');
  }
}

class ConcreteObservable extends IObservable {
  #state = { value: 0 };
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
  setState(newState) {
    this.#state = { ...newState };
    this.notify();
  }
  getState() {
    return this.#state;
  }
}
class ConcreteObserverA extends IObserver {
  #observable;

  constructor(observable) {
    super();
    this.#observable = observable;
  }
  update() {
    const newValue = this.#observable.getState().value;
    console.log(
      `${this.constructor.name}: Reacted to the event. New value is: ${newValue}`
    );
  }
}
class ConcreteObserverB extends IObserver {
  #observable;

  constructor(observable) {
    super();
    this.#observable = observable;
  }
  update() {
    const newValue = this.#observable.getState().value;
    console.log(
      `${this.constructor.name}: Reacted to the event. New value is: ${newValue}`
    );
  }
}

const observable = new ConcreteObservable();

const observer1 = new ConcreteObserverA(observable);
const observer2 = new ConcreteObserverB(observable);

observable.add(observer1);
observable.add(observer2);

observable.setState({ value: 1 });
observable.setState({ value: 2 });

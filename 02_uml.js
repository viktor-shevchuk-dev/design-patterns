class Client {
  #strategy;

  constructor(strategy) {
    this.#strategy = strategy;
  }

  setStrategy(strategy) {
    this.#strategy = strategy;
  }

  executeStrategy(data) {
    return this.#strategy.doAlgorithm(data);
  }
}

class Strategy {
  doAlgorithm(_data) {
    throw new Error('This method must be overridden');
  }
}

class ConcreteStrategyA extends Strategy {
  doAlgorithm(data) {
    return data.sort();
  }
}

class ConcreteStrategyB extends Strategy {
  doAlgorithm(data) {
    return data.reverse();
  }
}

const client = new Client(new ConcreteStrategyB());
console.log(client.executeStrategy(['a', 'b', 'c', 'd', 'e']));

client.setStrategy(new ConcreteStrategyA());
console.log(client.executeStrategy(['a', 'b', 'c', 'd', 'e']));

// The solution to the problems with inheritance is not more inheritance!!!
// When we cannot create a hierarchical solution to share different algorithms, we need to extract the algorithms.

class Duck {
  #quackStrategy;
  #flyStrategy;

  constructor(quackStrategy, flyStrategy) {
    if (quackStrategy instanceof IQuackStrategy) {
      this.#quackStrategy = quackStrategy;
    } else {
      throw new Error('Invalid quack strategy');
    }

    if (flyStrategy instanceof IFlyStrategy) {
      this.#flyStrategy = flyStrategy;
    } else {
      throw new Error('Invalid fly strategy');
    }
  }
  display() {
    throw new Error('This method should be overridden');
  }
  executeQuack() {
    this.#quackStrategy.quack();
  }
  executeFly() {
    this.#flyStrategy.fly();
  }
}
class WildDuck extends Duck {
  constructor() {
    super(new SimpleQuackStrategy(), new SimpleFlyStrategy());
  }
  display() {
    console.log('Displaying a Wild Duck');
  }
}

class IQuackStrategy {
  quack() {
    throw new Error('This method must be overridden');
  }
}
class IFlyStrategy {
  fly() {
    throw new Error('This method must be overridden');
  }
}

class SimpleQuackStrategy extends IQuackStrategy {
  quack() {
    console.log('Simple Quack!');
  }
}
class NoQuackStrategy extends IQuackStrategy {
  quack() {
    // Do nothing
  }
}
class SimpleFlyStrategy extends IFlyStrategy {
  fly() {
    console.log('Simple Fly!');
  }
}
class NoFlyStrategy extends IFlyStrategy {
  fly() {
    // Do nothing
  }
}
class JetFlyStrategy extends IFlyStrategy {
  fly() {
    console.log('Engine Supported Flying!');
  }
}

class CityDuck extends Duck {
  constructor() {
    super(new SimpleQuackStrategy(), new SimpleFlyStrategy());
  }
  display() {
    console.log('Displaying a City Duck');
  }
}
class RubberDuck extends Duck {
  constructor() {
    super(new NoQuackStrategy(), new NoFlyStrategy());
  }
  display() {
    console.log('Displaying a Rubber Duck');
  }
}
class CloudDuck extends Duck {
  constructor() {
    super(new SimpleQuackStrategy(), new JetFlyStrategy());
  }
  display() {
    console.log('Displaying a Cloud Duck');
  }
}
class MountainDuck extends Duck {
  constructor() {
    super(new SimpleQuackStrategy(), new JetFlyStrategy());
  }
  display() {
    console.log('Displaying a Mountain Duck');
  }
}

const wildDuck = new WildDuck();
wildDuck.executeQuack(); // Simple Quack!
wildDuck.executeFly(); // Simple Fly!
wildDuck.display(); // Displaying a Wild Duck

const rubberDuck = new RubberDuck();
rubberDuck.executeQuack(); // No sound
rubberDuck.executeFly(); // No flying
rubberDuck.display(); // Displaying a Rubber Duck

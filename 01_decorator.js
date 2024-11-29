class Beverage {
  constructor() {
    if (this.constructor === Beverage) {
      throw new Error(
        'Beverage is an abstract class and cannot be instantiated directly.'
      );
    }
  }

  getDescription() {
    return this.constructor.name;
  }

  cost() {
    throw new Error('Method cost() must be implemented in subclass');
  }
}

class Coffee extends Beverage {
  cost() {
    return 1.99;
  }
}

class Tea extends Beverage {
  cost() {
    return 1.5;
  }
}

class FlavourDecorator extends Beverage {
  constructor(beverage) {
    if (new.target === FlavourDecorator) {
      throw new Error(
        'FlavourDecorator is an abstract class and cannot be instantiated directly.'
      );
    }

    super();
    this.beverage = beverage;
  }

  cost() {
    throw new Error('Method cost() must be implemented in subclass');
  }
}

class MilkDecorator extends FlavourDecorator {
  getDescription() {
    return `${super.getDescription()} milk`;
  }
  cost() {
    return 0.5 + this.beverage.cost();
  }
}

class ChocolateDecorator extends FlavourDecorator {
  getDescription() {
    return `${this.beverage.getDescription()} chocolate`;
  }
  cost() {
    return 0.5 + this.beverage.cost();
  }
}

class EspressoShotDecorator extends FlavourDecorator {
  getDescription() {
    return `${this.beverage.getDescription()} + 1 shot`;
  }
  cost() {
    return 0.75 + this.beverage.cost();
  }
}

const plainCoffee = new Coffee();
const coffeeWithMilk = new MilkDecorator(plainCoffee);
const cofeeWithMilkAndChocolate = new ChocolateDecorator(coffeeWithMilk);
const cofeeWithMilkAndChocolateAndShot = new EspressoShotDecorator(
  cofeeWithMilkAndChocolate
);
const cofeeWithMilkAndChocolateAndDoubleShot = new EspressoShotDecorator(
  cofeeWithMilkAndChocolateAndShot
);

console.log(
  `${cofeeWithMilkAndChocolateAndDoubleShot.getDescription()} costs $${cofeeWithMilkAndChocolateAndDoubleShot.cost()}`
);

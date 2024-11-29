// Class explosion OR violates the Interface Segregation Principle, which advocates that no client should be forced to depend on methods it does not use:

class Beverage {
  constructor() {
    this.milk = false;
    this.soy = false;
    this.whippedCream = false;
    this.chocolate = false;
    this.shots = 0;
  }

  getDescription() {
    let description = this.constructor.name;
    if (this.shots > 0) description += ` + ${this.shots} shot(s)`;
    if (this.milk) description += ' + milk';
    if (this.soy) description += ' + soy';
    if (this.whippedCream) description += ' + whipped cream';
    if (this.chocolate) description += ' + chocolate';
    return description;
  }

  cost() {
    throw new Error('Method cost() must be implemented in subclass');
  }

  setMilk() {
    this.milk = true;
  }

  setSoy() {
    this.soy = true;
  }

  setWhippedCream() {
    this.whippedCream = true;
  }

  setChocolate() {
    this.chocolate = true;
  }

  addEspressoShot() {
    this.shots++;
  }
}

class Coffee extends Beverage {
  constructor() {
    super();
  }

  cost() {
    const baseLineCost = 1.99;
    let totalCost = baseLineCost;
    totalCost += this.shots * 0.75; // Add cost for extra shots
    if (this.milk) totalCost += 0.5;
    if (this.soy) totalCost += 0.5;
    if (this.whippedCream) totalCost += 0.5;
    if (this.chocolate) totalCost += 0.5;
    return totalCost;
  }
}

class Tea extends Beverage {
  constructor() {
    super();
  }

  cost() {
    return 1.5;
  }
}

const tea = new Tea();
tea.setWhippedCream(); // Tea does not want to use setWhippedCream method
console.log(tea);
console.log(`${tea.getDescription()} cost: $${tea.cost()}`);

const coffee = new Coffee();
coffee.addEspressoShot();
coffee.addEspressoShot();
coffee.setWhippedCream();
console.log(coffee);
console.log(`${coffee.getDescription()} cost: $${coffee.cost()}`);

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Duck extends Animal {
  constructor() {
    super('Duck');
  }

  makeSound() {
    console.log('Quack Quack!');
  }
}

class Dog extends Animal {
  constructor() {
    super('Dog');
  }

  makeSound() {
    console.log('Woof Woof!');
  }
}

class Cat extends Animal {
  constructor() {
    super('Cat');
  }

  makeSound() {
    console.log('Meow Meow!');
  }
}

class AnimalFactory {
  createAnimal() {}
}

class RandomAnimalFactory extends AnimalFactory {
  createAnimal() {
    const rndNumBtwZeroAndTwo = Math.floor(Math.random() * 3);

    switch (rndNumBtwZeroAndTwo) {
      case 0:
        return new Duck();
      case 1:
        return new Dog();
      case 2:
        return new Cat();
      default:
        throw new Error('Unknown animal type');
    }
  }
}

class BalancedAnimalFactory extends AnimalFactory {
  constructor() {
    super();
    this.counts = {
      Duck: 0,
      Dog: 0,
      Cat: 0,
    };
  }

  createAnimal() {
    const keys = Object.keys(this.counts);
    const animalType = keys.reduce((a, b) =>
      this.counts[a] < this.counts[b] ? a : b
    );
    this.counts[animalType]++;

    switch (animalType) {
      case 'Duck':
        return new Duck();
      case 'Dog':
        return new Dog();
      case 'Cat':
        return new Cat();
      default:
        throw new Error('Unknown animal type');
    }
  }
}

const forest = [];
for (let i = 0; i < 3; i++) {
  forest.push(new RandomAnimalFactory().createAnimal().makeSound());
}

const balancedFactory = new BalancedAnimalFactory();
for (let i = 0; i < 3; i++) {
  forest.push(balancedFactory.createAnimal().makeSound());
}

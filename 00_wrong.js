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

const forest = [];
for (let i = 0; i < 3; i++) {
  let animal = null;
  const rndNumBtwZeroAndTwo = Math.floor(Math.random() * 3);

  switch (rndNumBtwZeroAndTwo) {
    case 0:
      animal = new Duck();
      break;
    case 1:
      animal = new Dog();
      break;
    case 2:
      animal = new Cat();
      break;
    default:
      throw new Error('Unknown animal type');
  }

  forest.push(animal);
  animal.makeSound();
}

const counts = {
  Duck: 0,
  Dog: 0,
  Cat: 0,
};

for (let i = 0; i < 3; i++) {
  let animal = null;
  const keys = Object.keys(counts);
  const animalType = keys.reduce((a, b) => (counts[a] < counts[b] ? a : b));
  counts[animalType]++;

  switch (animalType) {
    case 'Duck':
      animal = new Duck();
      break;
    case 'Dog':
      animal = new Dog();
      break;
    case 'Cat':
      animal = new Cat();
      break;
    default:
      throw new Error('Unknown animal type');
  }

  forest.push(animal);
  animal.makeSound();
}

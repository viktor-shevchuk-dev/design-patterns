class AbstractProductA {
  operation() {}
}
class AbstractProductB {
  operation() {}
}
class AbstractCreator {
  getProductA() {}
  getProductB() {}
}

class ConcreteProductA1 extends AbstractProductA {
  operation() {
    return '{Result of the ConcreteProductA1}';
  }
}
class ConcreteProductA2 extends AbstractProductA {
  operation() {
    return '{Result of the ConcreteProductA2}';
  }
}
class ConcreteProductB1 extends AbstractProductB {
  operation() {
    return '{Result of the ConcreteProductB1}';
  }
  anotherOperation(collaborator) {
    const result = collaborator.operation();
    return `The result of the B1 collaborating with the (${result})`;
  }
}
class ConcreteProductB2 extends AbstractProductB {
  operation() {
    return '{Result of the ConcreteProductB2}';
  }
  anotherOperation(collaborator) {
    const result = collaborator.operation();
    return `The result of the B2 collaborating with the (${result})`;
  }
}
class ConcreteCreator1 extends AbstractCreator {
  getProductA() {
    return new ConcreteProductA1();
  }
  getProductB() {
    return new ConcreteProductB2();
  }
}

class ConcreteCreator2 extends AbstractCreator {
  getProductA() {
    return new ConcreteProductA2();
  }
  getProductB() {
    return new ConcreteProductB1();
  }
}

const factory1 = new ConcreteCreator1();
const productA = factory1.getProductA();
const productB = factory1.getProductB();

console.log(productB.operation());
console.log(productB.anotherOperation(productA));

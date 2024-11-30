class Product {}
class Creator {
  factoryMethod() {}
}

class ConcreteProduct1 extends Product {
  operation() {
    return '{Result of the ConcreteProduct1}';
  }
}
class ConcreteCreator1 extends Creator {
  factoryMethod() {
    return new ConcreteProduct1();
  }
}

const creator1 = new ConcreteCreator1();
console.log(creator1.factoryMethod().operation());

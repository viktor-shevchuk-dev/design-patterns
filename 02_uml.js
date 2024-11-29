class Component {
  constructor() {
    if (this.constructor === Component) {
      throw new Error(
        'Component is an abstract class and cannot be instantiated directly.'
      );
    }
  }
  method1() {}
  method2() {}
}
class ConcreteComponentA extends Component {
  method1() {
    return 'ConcreteComponentA';
  }
  method2() {}
}
class Decorator extends Component {
  #component;

  constructor(component) {
    if (new.target === Decorator) {
      throw new Error(
        'Decorator is an abstract class and cannot be instantiated directly.'
      );
    }

    super();
    this.#component = component;
  }
  method1() {
    return this.#component.method1();
  }
  method2() {}
}

class ConcreteDecoratorA extends Decorator {
  method1() {
    return `ConcreteDecoratorA(${super.method1()})`;
  }
  method2() {}
}
class ConcreteDecoratorB extends Decorator {
  method1() {
    return `ConcreteDecoratorB(${super.method1()})`;
  }
  method2() {}
}

const concreteComponentA = new ConcreteComponentA();

const ADecoratedComponentA = new ConcreteDecoratorA(concreteComponentA);
const ABDecoratedComponentA = new ConcreteDecoratorB(ADecoratedComponentA);

console.log(ABDecoratedComponentA.method1());

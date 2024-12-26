class AbstractClass {
  constructor() {
    if (new.target === AbstractClass) {
      throw new Error('An abstract class cannot be instantiated directly.');
    }
  }
  templateMethod() {
    // abstract or primitive operation
    console.log('Starting template method...');
    this.operationA();
    console.log('Continuing template method...');
    this.operationB();
    console.log('Template method is completed.');
  }
  operationA() {
    throw new Error('Method operationA() must be implemented in subclass');
  }
  operationB() {
    throw new Error('Method operationB() must be implemented in subclass');
  }
}

class ConcreteClass extends AbstractClass {
  operationA() {
    console.log('Operation A is executed.');
  }
  operationB() {
    console.log('Operation B is executed.');
  }
}

const concretion = new ConcreteClass();
concretion.templateMethod();
// Starting template method...
// Operation A is executed.
// Operation B is executed.
// Template method is completed.

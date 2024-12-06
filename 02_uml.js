class Abstraction {
  implementation = null;

  constructor(implementation) {
    if (this.constructor === Abstraction) {
      throw new Error('Cannot instantiate abstract class.');
    }
    this.implementation = implementation;
  }

  operation() {
    const result = this.implementation.operationImplementation();
    return `Abstraction: Base operation with:\n${result}`;
  }
}

class ExtendedAbstraction extends Abstraction {
  operation() {
    const result = this.implementation.operationImplementation();
    return `ExtendedAbstraction: Extended operation with:\n${result}`;
  }
}

/**
 * The Implementation defines the interface for all implementation classes. It
 * doesn't have to match the Abstraction's interface. In fact, the two
 * interfaces can be entirely different. Typically the Implementation interface
 * provides only primitive operations, while the Abstraction defines higher-
 * level operations based on those primitives.
 */

class IImplementation {
  operationImplementation() {}
}

/**
 * Each Concrete Implementation corresponds to a specific platform and
 * implements the Implementation interface using that platform's API.
 */

class ConcreteImplementationA extends IImplementation {
  operationImplementation() {
    return "ConcreteImplementationA: Here's the result on the platform A.";
  }
}

class ConcreteImplementationB extends IImplementation {
  operationImplementation() {
    return "ConcreteImplementationB: Here's the result on the platform B.";
  }
}

/**
 * Except for the initialization phase, where an Abstraction object gets linked
 * with a specific Implementation object, the client code should only depend on
 * the Abstraction class. This way the client code can support any abstraction-
 * implementation combination.
 */

const implementation = new ConcreteImplementationA();
const abstraction = new ExtendedAbstraction(implementation);
console.log(abstraction.operation());
// ExtendedAbstraction: Extended operation with:
// ConcreteImplementationA: Here's the result on the platform A.

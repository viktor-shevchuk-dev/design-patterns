class ITarget {
  request() {
    throw new Error('Implement in a subclass.');
  }
}

class Adapter extends ITarget {
  constructor(adaptee) {
    super();
    this.adaptee = adaptee;
  }

  request() {
    return this.adaptee.specificRequest();
  }
}

class Adaptee {
  specificRequest() {
    return 'specific task executed';
  }
}

const adapter = new Adapter(new Adaptee());
console.log(adapter.request()); // specific task executed

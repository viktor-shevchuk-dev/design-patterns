/**
 * The Subject interface declares common operations for both RealSubject and the
 * Proxy. As long as the client works with RealSubject using this interface,
 * you'll be able to pass it a proxy instead of a real subject.
 */
class ISubject {
  request() {
    throw new Error('The interface needs to be implemented.');
  }
}

/**
 * The RealSubject contains some core business logic. Usually, RealSubjects are
 * capable of doing some useful work which may also be very slow or sensitive -
 * e.g. correcting input data. A Proxy can solve these issues without any
 * changes to the RealSubject's code.
 */
class RealSubject extends ISubject {
  request() {
    console.log('RealSubject: Handling request.');
  }
}

class Proxy extends ISubject {
  #realSubject = null;

  /**
   * The Proxy maintains a reference to an object of the RealSubject class. It
   * can be either lazy-loaded or passed to the Proxy by the client.
   */
  constructor(realSubject) {
    super();
    this.#realSubject = realSubject;
  }

  #checkAccess() {
    // Some real checks should go here.
    console.log('Proxy: Checking access prior to firing a real request.');

    return true;
  }

  /**
   * The most common applications of the Proxy pattern are lazy loading,
   * caching, controlling the access, logging, etc. A Proxy can perform one of
   * these things and then, depending on the result, pass the execution to the
   * same method in a linked RealSubject object.
   */
  request() {
    if (this.#checkAccess()) {
      this.#realSubject.request();
    }
  }
}

const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);
proxy.request();
// Proxy: Checking access prior to firing a real request.
// RealSubject: Handling request.

class Singleton {
  static #instance = null;

  constructor() {
    if (Singleton.#instance) {
      console.warn('Already created!');

      return Singleton.#instance;
    }

    Singleton.#instance = this;

    // ... rest of the constructor code goes after this

    this.rnd = Math.random();
  }

  someBusinessLogic() {}
}

console.log(new Singleton());
console.log(new Singleton());
// Singleton { rnd: 0.2123286863923064 }
// Already created!
// Singleton { rnd: 0.2123286863923064 }

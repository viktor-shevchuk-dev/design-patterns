const bookString = '...';

class IBookParser {
  numberOfWords() {
    throw new Error('The interface needs to be implemented.');
  }

  complexityOfText() {
    throw new Error('The interface needs to be implemented.');
  }
}

class RealBookParser extends IBookParser {
  constructor(bookString) {
    super();
    this.bookString = bookString;
    // heavy computation
    // precomputes the value of below methods
  }

  numberOfWords() {
    // invoking the method is cheap because the cost has already been incurred
    return Number();
  }

  complexityOfText() {
    // invoking the method is cheap because the cost has already been incurred
    return String();
  }
}

class LazyBookParserProxy extends IBookParser {
  // deferring the instantiation of the underlying book parser

  boundBookParserClass = class extends IBookParser {
    constructor(bookString) {
      this.bookString = bookString;
    }
  };

  realBookParser = null;

  constructor(boundBookParserClass) {
    super();
    this.boundBookParserClass = boundBookParserClass;
  }

  #cacheBookParser() {
    this.realBookParser = new this.boundBookParserClass();
  }

  numberOfWords() {
    if (!this.realBookParser) {
      this.#cacheBookParser();
    }

    return this.realBookParser.numberOfWords();
  }

  complexityOfText() {
    if (!this.realBookParser) {
      this.#cacheBookParser();
    }

    return this.realBookParser.complexityOfText();
  }
}

const bookParser1 = new LazyBookParserProxy(
  RealBookParser.bind(null, bookString)
);
console.log(bookParser1.numberOfWords()); // 0

const bookParser2 = new LazyBookParserProxy(
  RealBookParser.bind(null, bookString)
);

console.log(bookParser1);
// LazyBookParserProxy {
//   boundBookParserClass: [Function: bound RealBookParser],
//   realBookParser: RealBookParser { bookString: '...' }
// }

console.log(bookParser2);
// LazyBookParserProxy {
//   boundBookParserClass: [Function: bound RealBookParser],
//   realBookParser: null
// }

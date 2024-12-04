const bookString = '...';

class BookParser {
  constructor(book) {
    this.book = book;
    // heavy computation
    // precomputes the value of below methods
  }

  numberOfWords() {
    // invoking the method is cheap because the cost has already been incurred
  }

  complexityOfText() {
    // invoking the method is cheap because the cost has already been incurred
  }
}

const bp1 = new BookParser(bookString);
bp1.complexityOfText();

const bp2 = new BookParser(bookString); // useless computation happening

console.log(bp1, bp2);

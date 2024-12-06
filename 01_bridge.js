// 2+4 = 6 classes in total

class View {
  constructor(resource) {
    if (this.constructor === View) {
      throw new Error('Cannot instantiate abstract class View.');
    }
    this.resource = resource;
  }

  show() {}
}
class IMediaResorce {
  constructor() {}
  title() {}
  description() {}
  image() {}
}

class LongFormView extends View {
  show() {
    return `Title: ${this.resource.title()}\nDescription: ${this.resource.description()}\nImage: ${this.resource.image()}`;
  }
}
class ShortFormView extends View {
  show() {
    return `Title: ${this.resource.title()}\nImage: ${this.resource.image()}`;
  }
}

class ArtistResource extends IMediaResorce {
  constructor(artist) {
    super();
    this.artist = artist;
  }
  title() {
    return `Artist: ${this.artist.fName + this.artist.lNamme}`;
  }
  description() {
    return this.artist.bio;
  }
  image() {
    return this.artist.photo;
  }
}
class BookResource extends IMediaResorce {
  constructor(book) {
    super();
    this.book = book;
  }
  title() {
    return `Book: ${this.book.title}`;
  }
  description() {
    return this.book.summary;
  }
  image() {
    return this.book.cover;
  }
}
class AlbumResource extends IMediaResorce {
  constructor(album) {
    super();
    this.album = album;
  }
  title() {
    return `Album: ${this.album.title}`;
  }
  description() {
    return this.album.genre;
  }
  image() {
    return this.album.cover;
  }
}
class AuthorResource extends IMediaResorce {
  constructor(author) {
    super();
    this.author = author;
  }
  title() {
    return `Author: ${this.author.name}`;
  }
  description() {
    return this.author.biography;
  }
  image() {
    return this.author.portrait;
  }
}

const artist = {
  fName: 'Frida',
  lNamme: 'Kahlo',
  bio: 'A brief bio of Frida.',
  photo: 'link_to_photo',
};
const artistResource = new ArtistResource(artist);
const longFormArtistView = new LongFormView(artistResource);
console.log(longFormArtistView);
// LongFormView {
//   resource: ArtistResource {
//     artist: {
//       fName: 'Frida',
//       lNamme: 'Kahlo',
//       bio: 'A brief bio of Frida.',
//       photo: 'link_to_photo'
//     }
//   }
// }
console.log(longFormArtistView.show());
// Title: Artist: FridaKahlo
// Description: A brief bio of Frida.
// Image: link_to_photo

const book = {
  title: '1984',
  summary: 'A dystopian novel.',
  cover: 'link_to_cover',
};
const bookResource = new BookResource(book);
const shortFormBookView = new ShortFormView(bookResource);
console.log(shortFormBookView.show());
// Title: Artist: FridaKahlo
// Description: A brief bio of Frida.
// Image: link_to_photo
// Title: Book: 1984
// Image: link_to_cover

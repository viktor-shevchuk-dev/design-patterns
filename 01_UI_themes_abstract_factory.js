class Text {
  constructor(content) {
    this.content = content;
  }

  display() {
    throw new Error('This method must be implemented by subclass');
  }
}

class Background {
  display() {
    throw new Error('This method must be implemented by subclass');
  }
}

// Dark theme products
class DarkText extends Text {
  display() {
    console.log(`Displaying dark text: ${this.content} in white color`);
  }
}

class DarkBackground extends Background {
  display() {
    console.log('Dark background rendered in black color');
  }
}

// Light theme products
class LightText extends Text {
  display() {
    console.log(`Displaying light text: ${this.content} in black color`);
  }
}

class LightBackground extends Background {
  display() {
    console.log('Light background rendered in white color');
  }
}

// Colored theme products
class ColoredText extends Text {
  display() {
    console.log(`Displaying colored text: ${this.content} in blue color`);
  }
}

class ColoredBackground extends Background {
  display() {
    console.log('Colored background rendered in yellow color');
  }
}

class ThemeFactory {
  createText(_content) {
    throw new Error('This method must be implemented by subclass');
  }

  createBackground() {
    throw new Error('This method must be implemented by subclass');
  }
}

class DarkThemeFactory extends ThemeFactory {
  createText(content) {
    return new DarkText(content);
  }

  createBackground() {
    return new DarkBackground();
  }
}

class LightThemeFactory extends ThemeFactory {
  createText(content) {
    return new LightText(content);
  }

  createBackground() {
    return new LightBackground();
  }
}

class ColoredThemeFactory extends ThemeFactory {
  createText(content) {
    return new ColoredText(content);
  }

  createBackground() {
    return new ColoredBackground();
  }
}

const darkThemeFactory = new DarkThemeFactory();
const darkThemeText = darkThemeFactory.createText('Hello, World!');
const darkThemeBackground = darkThemeFactory.createBackground();
darkThemeBackground.display();
darkThemeText.display();

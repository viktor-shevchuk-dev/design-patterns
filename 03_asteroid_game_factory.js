class Asteroid {
  constructor(size, position, velocity) {
    this.size = size; // 'small', 'medium', 'large'
    this.position = position; // { x: number, y: number }
    this.velocity = velocity; // number
  }

  display() {
    console.log(
      `Asteroid - Size: ${this.size}, Position: (${this.position.x}, ${this.position.y}), Velocity: ${this.velocity}`
    );
  }
}

class AsteroidFactory {
  #levelMultiplier;

  constructor(levelMultiplier) {
    this.#levelMultiplier = levelMultiplier;
  }

  createAsteroid() {
    const size = this.#determineSize();
    const position = this.#generatePosition();
    const velocity = this.#calculateVelocity();

    return new Asteroid(size, position, velocity);
  }

  #calculateVelocity() {
    return 10 * this.#levelMultiplier;
  }

  #calculateBigAsteroidChance() {
    return 0.1 * this.#levelMultiplier;
  }

  #determineSize() {
    // Generate a size based on chance: bigger chance as game progresses or based on a random draw

    const bigAsteroidChance = this.#calculateBigAsteroidChance();
    const randomDraw = Math.random();

    if (randomDraw < bigAsteroidChance) {
      return 'large';
    } else if (randomDraw < bigAsteroidChance + 0.3) {
      return 'medium';
    } else {
      return 'small';
    }
  }

  #generatePosition() {
    // Random position on the canvas/screen
    return {
      x: Math.random() * 1000, // Assuming a width of 1000 for the canvas
      y: Math.random() * 1000, // Assuming a height of 1000 for the canvas
    };
  }
}

const level = 1;
const asteroidFactory = new AsteroidFactory(level);

const asteroids = [];
for (let i = 0; i < 3; i++) {
  asteroids.push(asteroidFactory.createAsteroid());
}

asteroids.forEach((asteroid) => asteroid.display());

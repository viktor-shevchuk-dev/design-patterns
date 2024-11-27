class Duck {
  quack() {}
  display() {}
  fly() {}
}
class WildDuck extends Duck {
  display() {
    console.log('Displaying a Wild Duck');
  }
}
class CityDuck extends Duck {
  display() {
    console.log('Displaying a City Duck');
  }
}
class RubberDuck extends Duck {
  display() {
    console.log('Displaying a Rubber Duck');
  }
  fly() {
    // Do nothing
  }
}
class MountainDuck extends Duck {
  display() {
    console.log('Displaying a Mountain Duck');
  }
  fly() {
    // the same fly behaviour as the CloudDuck's
  }
}
class CloudDuck extends Duck {
  display() {
    console.log('Displaying a Cloud Duck');
  }
  fly() {}
  // the same fly behaviour as the MountainDuck's
}

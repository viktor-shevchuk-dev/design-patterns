class Record {
  save() {
    // hook operation
    this.beforeSave();
    console.log('https//:DB.query()');
    const ok = true;
    if (ok) {
      this.onSaveSuccess();
    } else {
      this.onSaveFailure();
    }
  }
  beforeSave() {}
  onSaveSuccess() {}
  onSaveFailure() {}
}

class User extends Record {
  constructor(userName) {
    super();
    this.userName = userName;
  }
  beforeSave() {
    // actual implementation if needed this lifecycle hook
  }
  onSaveSuccess() {
    // actual implementation if needed this lifecycle hook
  }
  onSaveFailure() {
    // actual implementation if needed this lifecycle hook
  }
}

class Post extends Record {
  constructor(text) {
    super();
    this.text = text;
  }
  beforeSave() {
    // actual implementation if needed this lifecycle hook
  }
  onSaveSuccess() {
    // actual implementation if needed this lifecycle hook
  }
  onSaveFailure() {
    // actual implementation if needed this lifecycle hook
  }
}

const user = new User('john');
const post = new Post('Hello, world!');
user.save();

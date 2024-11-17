class Logger {
  constructor() {
    this.logs = [];
  }

  log(message) {
    this.logs.push(message);
  }

  showLogs() {
    console.log(this.logs);
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Logger();
    }
    return this.instance;
  }
}

module.exports = Logger;

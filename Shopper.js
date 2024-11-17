const Logger = require('./Logger');

const logger = Logger.getInstance();

class Shopper {
  constructor(name, money) {
    this.name = name;
    this.money = money;
    logger.log(`New Shopper: ${name} has ${money} in their account.`);
  }
}

module.exports = Shopper;

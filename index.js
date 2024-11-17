const Logger = require('./Logger');
const Shopper = require('./Shopper');
const Store = require('./Store');

const logger = Logger.getInstance();
logger.log('starting app...');

const alex = new Shopper('Alex', 500);
const skiShop = new Store('Steep and Deep Supplies', [
  { item: 'Downhill Skis', qty: 5, price: 750 },
  { item: 'Knit Hat', qty: 20, price: 5 },
]);

logger.log('finished execution');

logger.showLogs();

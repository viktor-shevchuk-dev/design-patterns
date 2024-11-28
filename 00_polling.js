class DataSource {
  #data = { value: 0 };
  #lastKnownData = {};

  constructor() {
    this.#simulateDataChangesOverTime();
  }

  #simulateDataChangesOverTime() {
    setInterval(() => {
      this.#data.value += 1;
    }, 5000);
  }

  getData() {
    if (this.#lastKnownData.value !== this.#data.value) {
      this.#lastKnownData = { ...this.#data };
      return this.#data;
    }

    return null;
  }
}

class PollingClient {
  #dataSource;
  #pollInterval;

  constructor(dataSource, pollInterval = 1000) {
    this.#dataSource = dataSource;
    this.#pollInterval = pollInterval;
    this.#initPolling();
  }

  #initPolling() {
    setInterval(() => {
      const currentData = this.#dataSource.getData();

      if (currentData) {
        console.log('Data changed: ', currentData);
      }
    }, this.#pollInterval);
  }
}

const dataSource = new DataSource();
const client = new PollingClient(dataSource);

// db.js
class Database {
  constructor() {
    this.data = {};
  }

  getData(key) {
    return this.data[key];
  }

  setData(key, value) {
    this.data[key] = value;
  }

  deleteData(key) {
    delete this.data[key];
  }
}

module.exports = Database;

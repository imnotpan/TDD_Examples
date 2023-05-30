// app.js
class App {
    constructor(database) {
      this.database = database;
    }
  
    addToDatabase(key, value) {
      this.database.setData(key, value);
    }
  
    getFromDatabase(key) {
      return this.database.getData(key);
    }
  
    deleteFromDatabase(key) {
      this.database.deleteData(key);
    }
  }
  
  module.exports = App;
  
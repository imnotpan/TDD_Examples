// app.test.jsconst Database = require('./db');
const Database = require('./db');
const App = require('../app');


describe('App', () => {
  let database;
  let app;

  //Se ejecuta antes de cada prueba
  beforeEach(() => {
    database = new Database();
    app = new App(database);
  });


  test('should add data to the database', () => {
    const key = 'exampleKey';
    const value = 'exampleValue';

    // se llama a addToDatabase de app
    app.addToDatabase(key, value);

    //Se verifica si el valor recuperado de la base ded datos es igual al agregado
    expect(database.getData(key)).toEqual(value);
  });

  test('should get data from the database', () => {
    const key = 'exampleKey';
    const value = 'exampleValue';
    database.setData(key, value);

    const result = app.getFromDatabase(key);

    expect(result).toEqual(value);
  });

  test('should delete data from the database', () => {
    const key = 'exampleKey';
    const value = 'exampleValue';
    database.setData(key, value);

    app.deleteFromDatabase(key);

    expect(database.getData(key)).toBeUndefined();
  });
});

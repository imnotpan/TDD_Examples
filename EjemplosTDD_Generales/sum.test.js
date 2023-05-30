const sum = require('./sum');

/*
    Ejecutar prueba:
        npx jest sum.test.js

*/

// Test se utiliza para pruebas individuales.
test('Sumar 2 + 3 debe ser i.gual a 5', ()=> {
    expect(sum(2,3)).toBe(5);

});

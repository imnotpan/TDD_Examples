const capitalizeString = require('./capitalizeString');

test('capitalizar una cadena de test', ()=> {
    const input = 'hola mundo';
    const expectedOutput = 'HOLA MUNDO';
    const result = capitalizeString(input);

    
    expect(result).toBe(expectedOutput);
})
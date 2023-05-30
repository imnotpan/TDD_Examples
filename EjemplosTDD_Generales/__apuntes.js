// EJECUCION:::
/// ++++++ npx jest sum.test.js

/*
    INSTALACION JEST Y SUEPRTEST EN PROYECTO
        npm install jest --save-dev
        npm install supertest --save-dev
        ++ Instalar eslintrc
        ++ 
*/


//Describe agrupa pruebas relacionadas.
describe('POST /products', () => {
    //--> Puede estar compuesto de test
});

// Test se utiliza para pruebas individuales.
test('capitalizar una cadena de test', ()=> {

})


/*
COMPARACIONES:
    :: Comparacion de igualdad estricta
       -- expect(object1)).toBe(object2); 

    :: Comparacion profunda, sirve para comparar objetos y matrices
        -- expect(objeto1).toEqual(objeto2);

    :: Verifica si lo recibido es nulo
        -- expect(valor).toBeNull();

    :: verifica si el valor recibido esta definido.
        -- expect(valor).toBeDefined();

    :: verifica si el valor recibido es undefined
        -- expect(valor).toBeUndefined();

    :: Verifica si un valor esta presente en un arreglo o cadena de texto:
        -- expect(arreglo).toContain(elemento);

    :: verifica si un valor coincide con un patron regular
        -- expect(cadena).toMatch(expresionRegular);

    :: verifica si es falso en booleano
        -- expect(valor).toBeFalsy();

    :: Verifica si es verdadero en booleano
        -- expect(valor).toBeTruthy();


*/
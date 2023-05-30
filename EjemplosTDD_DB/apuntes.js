/*
EJECUTAR
++++++ npx jest

>>> npm install express
>>> npm install jest --save-dev
>>> npm install supertest --save-dev

En el ejemplo, el bloque describe('POST /users', ...) 
agrupa todas las pruebas relacionadas con la funcionalidad
de crear un nuevo usuario a través de la ruta POST /users. 
Esto proporciona una estructura clara y legible para las pruebas 
y ayuda a organizar el código de prueba de manera significativa.

Además, el bloque describe también proporciona funciones de 
configuración y limpieza antes y después de las pruebas que 
se ejecutan dentro del bloque. En el ejemplo, se utilizan los 
ganchos beforeAll y afterAll para conectarse y desconectarse 
de la base de datos antes y después de todas las pruebas del 
bloque describe.


*/
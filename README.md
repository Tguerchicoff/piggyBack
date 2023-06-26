# Be-tp2c
# Piggy

¡Bienvenidos a Piggy!
Piggy es una app para gestionar tus finanzas y alcanzar objetivos de ahorro. Registra ingresos, gastos y meta de ahorro. La app se encarga de realizar un cálculo de en cuántos días podrías llegar a tu meta de ahorro.


## Descripcion

Nunca pensaste porque no te rinde el dinero? O cuando te propones a ahorrar para poder comprarte algo que te gusta o necesitas, ¿no sabés en cuánto podrías conseguirlo?
Piggy esta pensado para esto. El algoritmo de Piggy acomoda tus gastos según tus prioridades y en base a tu objetivo de ahorro e ingresos mensuales calcula los dias que tardarias en llegar a ese objetivo!


## Instrucciones📜

1. En terminal, ejecutar "npm install" (para realizar la instalación de las dependencias necesarias)

2. Completar los campos correspondientes del archivo ".env.example" y renombrarlo a ".env"

3. En terminal, ejecutar "npm start" para iniciar el servidor.

4. Ejecutar comandos post, get, put y delete en las rutas correspondientes :)


* Comenta a otros sobre este proyecto 📢
* Gracias por interesarte en Piggy! 🤓
# Uso
La aplicación proporciona una API para gestionar usuarios. A continuación se detallan las rutas y operaciones disponibles:
1. GET /users - Obtener todos los usuarios.
2. GET /users/:id - Obtener un usuario por su ID.
3. POST /users - Crear un nuevo usuario.
4. PUT /users/:id - Actualizar un usuario existente.
5. DELETE /users/:id - Eliminar un usuario.

La aplicación proporciona una API para gestionar planes de ahorro. A continuación se detallan las rutas y operaciones disponibles:
1. GET /planes - Obtener todos los planes de ahorro.
2. GET /planes/:id - Obtener un plan de ahorro por su ID.
3. GET /planes/usuario/:id_usuario - Obtener el plan de ahorro de un usuario por su ID de usuario.
4. POST /planes - Crear un nuevo plan de ahorro.
5. PUT /planes/:id - Actualizar un plan de ahorro existente.
6. DELETE /planes/:id - Eliminar un plan de ahorro por su ID.
7. DELETE /planes/usuario/:id_usuario - Eliminar el plan de ahorro de un usuario por su ID de usuario.

La aplicación proporciona una API para gestionar gastos. A continuación se detallan las rutas y operaciones disponibles:
1. GET /gastos - Obtener todos los gastos.
2. GET /gastos/:id - Obtener un gasto por su ID.
3. GET /gastos/usuario/:id_usuario - Obtener los gastos de un usuario por su ID de usuario.
4. GET /gastos/costos/usuario/:id_usuario - Obtener el costo total de los gastos de un usuario por su ID de usuario.
5. POST /gastos - Crear un nuevo gasto.
6. PUT /gastos/:id - Actualizar un gasto existente.
7. DELETE /gastos/:id - Eliminar un gasto por su ID.


## Construido con 🛠

* [Node Js](https://nodejs.org/es)
* [Express](https://expressjs.com/es/)
* [Cors](https://www.npmjs.com/package/cors)
* [Sequelize](https://sequelize.org/)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)

## Autor ✒

* Agustina Boto - [agustinaboto] (https://github.com/agustinaboto)
* Joaquin Herreros - [joaherreros] (https://github.com/joaherreros)
* Matias Federico Martinez - [matiasfmart](https://github.com/matiasfmart)
* Tomas Guerchicoff - [Tguerchicoff] (https://github.com/Tguerchicoff)

/**
 * Main application routes  -- rutas de las aplicaciones
 */

// imports endpoint --  importacion de los puntos finales

const helloWorld = require('./api/helloworld');

//Insert routes below -- insertar rutas a continuacion

module.exports = app => {

    app.use('/api/helloworld', helloWorld);

    // Next routes  -- siguientes rutas
    // Endpoints in plural  --  puntos finales en plural
    // app.use('/api/users', user);
    // app.use('/api/products', product);

};
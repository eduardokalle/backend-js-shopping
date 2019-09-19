/**
 * Main application routes  -- rutas de las aplicaciones
 */

// imports endpoint --  importacion de los puntos finales

const helloWorld = require('./api/helloworld');

const product = require('./api/product');


//Insert routes below -- insertar rutas a continuacion

module.exports = app => {

    app.use('/api/helloworld', helloWorld);

    app.use('/api/products', product);

    // Next routes  -- siguientes rutas
    // Endpoints in plural  --  puntos finales en plural
    // app.use('/api/users', user);


};
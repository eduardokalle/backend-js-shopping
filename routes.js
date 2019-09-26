/**
 * Main application routes  -- rutas de las aplicaciones
 */

// imports endpoint --  importacion de los puntos finales

const helloWorld = require('./api/helloworld');

const product = require('./api/product');

const user = require('./api/user');

const auth = require('./auth');


//Insert routes below -- insertar rutas a continuacion

module.exports = app => {

    app.use('/api/helloworld', helloWorld);

    app.use('/api/products', product);

    app.use('/api/users', user);

    app.use('/auth', auth);

    // Next routes  -- siguientes rutas
    // Endpoints in plural  --  puntos finales en plural
    // app.use('/api/users', user);


};

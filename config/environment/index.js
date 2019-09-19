/**
 * Default specific configuration  --  configuracion especifica predeterminada
 *
 */

const all = {
    env: process.env.NODE_ENV,

    // Server port  --  puerto del servidor
    port: process.env.PORT || 8080,


    // Server IP  --  IP DEL SERVIDOR
    ip: process.env.IP || '127.0.0.1',


    //Should we populate the DB with sample data? --
    // ¿Deberíamos llenar el DB con datos de muestra?

    seedDB: false,

    //// Secret for session, you will want to change this and make it an environment variable
    ////   Secreto para la sesión, querrás cambiar esto y convertirlo en una variable de entorno

    secrets: {
        session: 'w0rksh0p-full5tack-j4v45cr1pt',
    },

    // MongoDB connection options -- Opciones de coneccion de mongoDB

    mongo: {

        uri: process.env.MONGO_URI || 'mongodb+srv://kalle:Abc123456*@cluster0-zques.mongodb.net/test?retryWrites=true&w=majority',
        db: 'workshop-fullstack-js',

    }
}

module.exports = all;
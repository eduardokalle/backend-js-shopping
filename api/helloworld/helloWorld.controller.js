/**
 * show hello world  --  muestra hola mundo
 */

function index(req, res) {
    return res.status(200).json({ mensaje: 'hello world' });

}

module.exports = { index };
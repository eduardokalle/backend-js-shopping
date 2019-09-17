/**
 * Hello World Endpoint  --punto final
 * contendra todos los verbos http mas comunes  POST, GET, PUT, DELET
 */


const { Router } = require('express');

const controller = require('./helloWorld.controller');

const router = new Router();

// all verbs   -- todos los verbos

router.get('/', controller.index);

/**
 * If we had other verbs HTTP  -- si tuvieramos todos los vervos http
 *
router.delete('/:id', controller.destroy);
router.put('/:id/', controller.update);
router.get('/:id', controller.show);
router.post('/', controller.create);

*/

module.exports = router;
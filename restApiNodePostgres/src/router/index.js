const {Router} = require('express');
const router = Router();
// importar controller
const { getUsers, createUsers,findUser, deleteUser, updateUsers, createLinks, getLinks, findIdLink } = 
require('../controller/index.controller');
router.get('/users', getUsers);
router.get('/users/:id',findUser);
router.delete('/users/:id',deleteUser);
router.put('/users/:id',updateUsers);
router.post('/users', createUsers);
//rutas links
router.post('/links', createLinks);
router.get('/links', getLinks);
router.get('/links/:id',findIdLink);
module.exports = router;
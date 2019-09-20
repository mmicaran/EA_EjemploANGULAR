const express = require('express');
const router = express.Router();
const users = require('../controllers/users.controller');

router.get('/users/', users.getUsers);
router.post('/users/', users.singUp);
router.post('/users/login', users.logIn);

router.get('/users/:id', users.getUser);
router.put('/users/:id', users.editUser);
router.delete('/users/:id', users.delteUser);

module.exports = router;
const { Router } = require('express');
const UsersController = require('./controllers/users.controller');


const routes = Router();

routes.get('/', (req, res) => res.json({ message: 'Hello' }))
routes.get('/users', UsersController.index)

module.exports = routes
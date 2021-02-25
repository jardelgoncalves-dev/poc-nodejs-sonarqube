const UsersService = require('../services/users.service');

class UsersController {
  static index(req, res) {
    res.json(UsersService.findAll())
  }
}

module.exports = UsersController
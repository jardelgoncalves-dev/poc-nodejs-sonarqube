const UsersRepository = require('../repositories/users.repository');

class UsersService {
  static findAll(req, res) {
    return UsersRepository.findAll()
  }
}

module.exports = UsersService
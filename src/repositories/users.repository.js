const users = [
  { name: 'john doe', email: 'john@doe.com' }
]

class UsersRepository {
  static findAll() {
    return users
  }
}

module.exports = UsersRepository
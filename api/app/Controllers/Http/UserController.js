'use strict'

const User = use('App/Models/User')

class UserController {
  async all () {
    const users = await User.all()

    return users
  }

  async create ({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController

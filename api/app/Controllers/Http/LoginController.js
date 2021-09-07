'use strict'

class LoginController {
  async create ({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.withRefreshToken().attempt(email, password)

    return token
  }

  async refresh ({ request, auth }) {
    const { refreshToken } = request.all()

    const token = await auth.newRefreshToken().generateForRefreshToken(refreshToken)

    return token
  }
}

module.exports = LoginController

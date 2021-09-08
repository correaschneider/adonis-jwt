'use strict'

const User = use('App/Models/User')

class LoginController {
  async create ({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.withRefreshToken().attempt(email, password)

    token.routes = {
      '/users': 'GET',
      '/login/refresh?refreshToken=REFRESH_TOKEN': 'GET',
      '/logout': 'GET',
    }

    return token
  }

  async refresh ({ request, auth }) {
    const { refreshToken } = request.all()
    const token = auth.getAuthHeader()

    const newToken = await auth.newRefreshToken().generateForRefreshToken(refreshToken)

    await auth.revokeTokens([token, refreshToken], true)

    return newToken
  }

  async logout ({ auth }) {
    const user = await auth.getUser()

    await auth.revokeTokensForUser(user, true)

    return { message: 'Bye' }
  }
}

module.exports = LoginController

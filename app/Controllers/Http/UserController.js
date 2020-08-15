'use strict'

const User = use('App/Models/User')
const { validate } = use('Validator')

class UserController {

  // register user
  async register({request, response}) {

    const formData = request.all()

    // rules to be followed
    const rules = {
      email: 'required|email|unique:users,email',
      password: 'required|min:8'
    }

    const validation = await validate(formData, rules)

    if (validation.fails()) {
      return response.status(400).json(validation.messages())
    }

    return User.create({
      username: formData.email,
      email: formData.email,
      password: formData.password
    })

  }

  // log in user
  async logIn({request, response, auth}) {

    const loginData = await request.all()

    // rules to be followed
    const rules = {
      email: 'required|email',
      password: 'required|min:8'
    }

    const validation = await validate(loginData, rules)

    if (validation.fails()) {
      return response.status(400).json(validation.messages())
    }

    const authInfo = await auth.withRefreshToken().attempt(loginData.email, loginData.password)

    if(authInfo !== null) {
      return response.status(200).json({
        user: loginData.email,
        auth: authInfo
      })
    }

  }

}

module.exports = UserController

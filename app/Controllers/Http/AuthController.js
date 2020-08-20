'use strict'
const registersMongo = use('App/Models/Register')

class AuthController {

  async verify({ response }){

    return response.status(200).json({
      message:true
    })

  }

}

module.exports = AuthController

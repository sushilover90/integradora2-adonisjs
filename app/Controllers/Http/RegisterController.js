'use strict'
const registersMongo = use('App/Models/Register')

class RegisterController {

  async getLectures(){

    return registersMongo.getActivations()

  }

}

module.exports = RegisterController

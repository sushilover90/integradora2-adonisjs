'use strict'

const mongoose = require('mongoose')
const registersMongo = use('App/Models/Register')
const activationsMongo = use('App/Models/Activation')
const document_id = 1


class IoTController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.socket.emit('message','You are connected with the socket id: ' + socket.id)
    this.request = request

  }

  onMessage(message){
    this.socket.broadcast('message',message)
  }

  onReserve(reserve){
    this.socket.broadcast('reserve',reserve)
  }

  onDispense(data){

    new Promise(
      (resolve, reject) => {
        const today = new Date()
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        const dateTime = date+' '+time

        const activation = new activationsMongo({
          _id: new mongoose.Types.ObjectId(),
          username: data.username,
          date: dateTime
        })

        let registers = registersMongo.where({document_id: document_id})

        registers.updateOne({$push: {activations: activation}}).exec()

        this.socket.broadcast('start_servo',data)

        resolve(registersMongo.getActivations())
      }
    ).then(activations => {
      this.socket.broadcastToAll('send_activations',activations)
    })

  }

  onMeasure(data){
    this.socket.broadcast('measure',data)
  }
}

module.exports = IoTController

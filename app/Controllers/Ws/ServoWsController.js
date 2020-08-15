'use strict'

class ServoWsController {
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
    this.socket.broadcast('start_servo',data)
  }

}

module.exports = ServoWsController

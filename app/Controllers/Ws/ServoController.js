'use strict'

class ServoController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onMessage(message){
    this.socket.broadcast('message',message)
  }

}

module.exports = ServoController

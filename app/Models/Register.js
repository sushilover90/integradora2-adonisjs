'use strict'

const mongoose = require('mongoose')

const Schema =  mongoose.Schema

const registerMongoSchema =  new Schema({
  _id: Schema.Types.ObjectId,
  document_id: Schema.Types.Number,
  activations: Schema.Types.Array
})

const registersMongoModel = mongoose.model('registers',registerMongoSchema)

module.exports = registersMongoModel

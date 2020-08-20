'use strict'

const mongoose = require('mongoose')

const Schema =  mongoose.Schema

const registerMongoSchema =  new Schema({
  _id: Schema.Types.ObjectId,
  document_id: Schema.Types.Number,
  activations: Schema.Types.Array
})

const registersMongoModel = mongoose.model('registers',registerMongoSchema)

class Register extends registersMongoModel {

  static async getActivations(){

    return await registersMongoModel.aggregate([
      {$unwind: "$activations"},
      {$match: {"document_id": 1}},
      {$sort: {"activations.date": -1}},
      {$group: {_id: "$_id", "activations": {$push: "$activations"}}},
      {$project: {"activations": "$activations"}},
    ])

  }

}

module.exports = Register

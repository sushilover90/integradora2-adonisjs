'use strict'

const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

const activationMongoSchema =  new Schema({
  _id: Schema.Types.ObjectId,
  date: Schema.Types.Date,
  username: Schema.Types.String
});

const activationsMongoModel = mongoose.model('activations',activationMongoSchema);

module.exports = activationsMongoModel

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServosSchema extends Schema {
  up () {
    this.create('servos', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('servos')
  }
}

module.exports = ServosSchema

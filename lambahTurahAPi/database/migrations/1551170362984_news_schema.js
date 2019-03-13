'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NewsSchema extends Schema {
  up () {
    this.create('news', (table) => {
      table.increments()
      table.string('title').notNullable().unique()
      table.string('image_url').notNullable()
      table.text('description').notNullable()
      table.string('author').notNullable()
      table.string('video_url').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('news')
  }
}

module.exports = NewsSchema

import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'favorites'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id').notNullable().primary
      table.string('name').nullable()
      table.string('login').notNullable().unique()
      table.string('avatar_url').notNullable()
      table.string('html_url').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

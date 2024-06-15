import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Favorite extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string | null

  @column()
  declare login: string

  @column()
  declare avatar_url: string

  @column()
  declare html_url: string
}

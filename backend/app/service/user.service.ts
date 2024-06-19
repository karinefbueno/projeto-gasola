import { inject } from '@adonisjs/core'
import fetch from 'node-fetch'
import FavoriteService from './favorite.service.js'

@inject()
export default class UserService {
  constructor(private favoriteService: FavoriteService) {}

  async findUser(username: string) {
    try {
      const apiUrl = `https://api.github.com/users/${username}`
      const apiResponse = await fetch(apiUrl)
      const response: any = await apiResponse.json()
      if (!response.id) {
        throw new Error('Usuário não encontrado ou sem ID')
      }

      if (!this.favoriteService || !this.favoriteService.isFavorite) {
        throw new Error('favoriteService não foi inicializado corretamente')
      }

      const isFavorite = await this.favoriteService.isFavorite(response.id)

      return { status: 'SUCCESSFUL', data: { ...response, isFavorite } }
    } catch (error) {
      console.error('Erro ao buscar dados da API do GitHub:', error)
      throw new Error('Erro ao buscar dados da API do GitHub')
    }
  }
}

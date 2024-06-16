import type { HttpContext } from '@adonisjs/core/http'
import mapStatusHTTP from '../../utils/map_status_http.js'
import FavoriteService from '../service/favorite.service.js'
import { inject } from '@adonisjs/core'
import { FavoriteTypes } from '../../types/types.js'

@inject()
export default class FavoritesController {
  constructor(private favoriteService: FavoriteService) {}

  async createFavorite({ request, response }: HttpContext): Promise<void> {
    const dataFavorite = request.body()
    const { status, data } = await this.favoriteService.createFavorite(
      dataFavorite as FavoriteTypes
    )
    response.status(mapStatusHTTP(status)).json(data)
  }

  async findAll({ request, response }: HttpContext) {
    const { status, data } = await this.favoriteService.findAll()
    return response.status(mapStatusHTTP(status)).json(data)
  }

  async deleteFavorite({ request, response }: HttpContext) {
    const { id } = request.params()
    const { status } = await this.favoriteService.deleteFavorite(id)
    return response.status(mapStatusHTTP(status))
  }
}

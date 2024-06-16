import Favorite from '#models/favorite'
import { FavoriteTypes } from '../../types/types.js'

export default class FavoriteService {
  async createFavorite(dataFavorite: FavoriteTypes) {
    const favorite = await Favorite.create({
      id: dataFavorite.id,
      name: dataFavorite.name,
      avatar_url: dataFavorite.avatar_url,
      html_url: dataFavorite.html_url,
      login: dataFavorite.login,
    })
    return { status: 'CREATED', data: favorite }
  }

  async findAll() {
    const allFavorites = await Favorite.all()
    return { status: 'CREATED', data: allFavorites }
  }

  async deleteFavorite(id: string) {
    const favoriteUser = await Favorite.findOrFail(id)
    await favoriteUser.delete()
    return { status: 'NO_CONTENT' }
  }
}

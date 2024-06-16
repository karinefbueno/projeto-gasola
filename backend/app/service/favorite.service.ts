import Favorite from '#models/favorite'
import { FavoriteTypes } from '../../types/types.js'

export default class FavoriteService {
  async isFavorite(userId: string) {
    const favorite = await Favorite.find(userId)
    return !!favorite
  }
  async createFavorite(dataFavorite: FavoriteTypes) {
    const isFavoriteUser = await this.isFavorite(dataFavorite.id)
    if (isFavoriteUser) {
      return { status: 'NOT_MODIFIED', message: 'User already favorite' }
    }
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

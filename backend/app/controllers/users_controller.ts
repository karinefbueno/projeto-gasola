import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import UserService from '../service/user.service.js'

@inject()
export default class UsersController {
  constructor(private userService: UserService) {}

  async findUser({ request, response }: HttpContext) {
    try {
      const { name } = request.params()
      if (!name) {
        return response.status(400).send('Query parameter "name" is required')
      }
      const githubData = await this.userService.findUser(name)
      return response.status(200).json(githubData)
    } catch (error) {
      console.error('Erro ao buscar usuário na API do GitHub:', error)
      return response.status(500).send('Erro ao buscar dados da API do GitHub')
    }
  }
}

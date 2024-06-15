import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import ReposService from '../service/repos.service.js'

@inject()
export default class ReposController {
  constructor(private userService: ReposService) {}

  async findAll({ request, response }: HttpContext) {
    try {
      const { query } = request.qs()
      if (!query) {
        return response.status(400).send('Query parameter "query" is required')
      }
      const githubData = await this.userService.findAll(query)
      return response.status(200).json(githubData)
    } catch (error) {
      console.error('Erro ao buscar dados da API do GitHub:', error)
      return response.status(500).send('Erro ao buscar dados da API do GitHub')
    }
  }
}

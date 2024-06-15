import fetch from 'node-fetch'

export default class ReposService {
  async findAll(query: string) {
    try {
      const apiUrl = `https://api.github.com/search/repositories?q=${query}`
      const apiResponse = await fetch(apiUrl)
      return await apiResponse.json()
    } catch (error) {
      console.error('Erro ao buscar dados da API do GitHub:', error)
      throw new Error('Erro ao buscar dados da API do GitHub')
    }
  }
}

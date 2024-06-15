import fetch from 'node-fetch'

export default class UserService {
  async findUser(username: string) {
    try {
      const apiUrl = `https://api.github.com/users/${username}`
      const apiResponse = await fetch(apiUrl)
      return await apiResponse.json()
    } catch (error) {
      console.error('Erro ao buscar dados da API do GitHub:', error)
      throw new Error('Erro ao buscar dados da API do GitHub')
    }
  }
}

import fetch from 'node-fetch';

export default class ReposService {
  async findAll(query: string) {
    try {
      const apiUrl = `https://api.github.com/search/users?q=${query}`;
      // const apiUrl = `https://api.github.com/search/repositories?q=${query}`;
      const apiResponse = await fetch(apiUrl);
      return await apiResponse.json();
    } catch (error) {
      const message = 'Erro ao buscar dados da API do GitHub:';
      console.error(message, error);
      throw new Error(message);
    }
  }
}

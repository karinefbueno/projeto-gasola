// src/utils/api.ts

const API_BASE_URL = 'http://localhost:3333';

export async function fetchGitUser(username: string): Promise<any> {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${username}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
}

export async function fetchGitHubData(query: string): Promise<any> {
  try {
    const response = await fetch(`${API_BASE_URL}/repos?query=${query}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
}

import { FavoriteProps, ReposProps, UserProps } from "../types/types";

const API_BASE_URL = 'http://localhost:3333';

export async function fetchGitUser(username: string): Promise<UserProps> {
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

export async function fetchGitHubData(query: string): Promise<ReposProps> {
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

export async function fetchCreateFavorite(body:FavoriteProps) {
  try {
    const response = await fetch(`${API_BASE_URL}/favorite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
}

export async function fetchFavorites(): Promise<FavoriteProps[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/favorite`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch favorites:', error);
    throw error;
  }
}

export async function fetchDeleteFavorite(id: string): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/favorite/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
}

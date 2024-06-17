import { BodyType, FavoriteProps, UserProps } from "../types/types";

const HOST = import.meta.env.VITE_HOST || 'http://localhost:3333';

export async function fetchGitUser(username: string): Promise<UserProps> {
  try {
    const response = await fetch(`${HOST}/users/${username}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
}

export async function fetchGitHubData(query: string): Promise<any> {
  try {
    const response = await fetch(`${HOST}/repos?query=${query}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
}

export async function fetchCreateFavorite(body:BodyType){
    try {
    const response = await fetch(`${HOST}/favorite`, {
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
    const response = await fetch(`${HOST}/favorite`);
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
    const response = await fetch(`${HOST}/favorite/${id}`, {
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

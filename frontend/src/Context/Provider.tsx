import { useState } from "react";
import context from "./Context";
import { fetchDeleteFavorite, fetchFavorites } from "../utils/api";
import { FavoriteProps, ReposProps } from "../types/types";

type ProviderProps = {
  children: React.ReactNode,
};

function Provider({ children }: ProviderProps) {
  const [favorited, setFavorited] = useState<boolean>(true);
  const [favorites, setFavorites] = useState<ReposProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    const data = await fetchFavorites();
    const transformedData = data.map((item) => ({
      id: item.id,
      owner: {
        login: item.login,
        avatar_url: item.avatarUrl,
        html_url: item.htmlUrl,
      },
    }));

    setFavorites(transformedData);
  };

  const deleteFavorite = async (id: string) => {
    console.log(typeof id);
    setLoading(true);
    const updatedFavorites = favorites.filter((fav) => {
      return fav.id !== id.toString();
    });

    console.log(updatedFavorites);
    setFavorites(updatedFavorites);
    setLoading(false);

    await fetchDeleteFavorite(id)
  }

  const contex = {
    favorited,
    setFavorited,
    fetchData,
    favorites,
    loading,
    deleteFavorite
  };

  return (
    <context.Provider value={contex}>
      {children}
    </context.Provider>
  );
}

export default Provider;
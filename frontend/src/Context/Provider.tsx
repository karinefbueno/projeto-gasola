import { useState } from "react";
import context from "./Context";
import { fetchDeleteFavorite, fetchFavorites } from "../utils/api";
import { ReposProps } from "../types/types";

type ProviderProps = {
  children: React.ReactNode,
};

function Provider({ children }: ProviderProps) {
  const [favorites, setFavorites] = useState<ReposProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    const data = await fetchFavorites();
    const transformedData = data.map((item) => ({
      id: item.id,
      name: item.name,
      login: item.login,
      avatar_url: item.avatarUrl,
      html_url: item.htmlUrl,
      
    }));
    setFavorites(transformedData);
  };

  const deleteFavorite = async (id: string) => {
    setLoading(true);
    const updatedFavorites = favorites
      .filter((fav) => fav.id !== id.toString());
    setFavorites(updatedFavorites);
    setLoading(false);

    await fetchDeleteFavorite(id)
  }

  const contex = {
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
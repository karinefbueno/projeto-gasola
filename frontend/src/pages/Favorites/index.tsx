import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { fetchFavorites } from "../../utils/api";
import CardRepo from "../../components/CardRepo";
import { ReposProps } from "../../types/types"; 
import { ContainerFavoriteCard, ContainerFavorite,Title } from "./style";

function Favorites() {
  const [favorites, setFavorites] = useState<ReposProps[]>([]);

  useEffect(() => {
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

    fetchData();
  }, []);

  return (
    <>
    <ContainerFavorite>
      <Header text="Home" href="/" />
      <Title>My Favorites</Title>
      <ContainerFavoriteCard >
        {favorites.map((item: ReposProps) => (
          <CardRepo
            key={item.id}
            id={item.id}
            owner={item.owner}
          />
        ))}
      </ContainerFavoriteCard >
      </ContainerFavorite>
    </>
  );
}

export default Favorites;

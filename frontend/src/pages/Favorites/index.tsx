import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import { fetchFavorites } from "../../utils/api";
import CardRepo from "../../components/CardRepo";
import { ReposProps } from "../../types/types"; 
import { ContainerFavoriteCard, ContainerFavorite,Title ,P} from "./style";
import context from "../../Context/Context";



function Favorites() {
  const [favorites, setFavorites] = useState<ReposProps[]>([]);
   const { favorited} = useContext(context);


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
  }, [favorited]);

  return (
    <>
    <ContainerFavorite>
      <Header text="Home" href="/" />
      <Title>My Favorites</Title>
      <ContainerFavoriteCard >
        {favorites.length==0 && <P>No favorite Github users have been added!</P>}
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

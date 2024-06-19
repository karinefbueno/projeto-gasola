import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import CardRepo from "../../components/CardRepo";
import { ReposProps } from "../../types/types";
import { ContainerFavoriteCard, ContainerFavorite, Title, P } from "./style";
import context from "../../Context/Context";


function Favorites() {

  const { favorites, fetchData, loading } = useContext(context);

  useEffect(() => {
    fetchData();
  }, [loading]);

  return (
    <>
      <ContainerFavorite>
        <Header text="Home" href="/" />
        <Title>My Favorites</Title>
        <ContainerFavoriteCard >
          {favorites.length == 0 && <P>No favorite Github users have been added!</P>}
          {loading ? <P>Loading...</P>
            : favorites.map((item: ReposProps) => (
              <CardRepo
                key={item.id}
                id={item.id}
                avatar_url={item.avatar_url}
                html_url={item.html_url}
                login={item.login}
              />
            ))}
        </ContainerFavoriteCard >
      </ContainerFavorite>
    </>
  );
}

export default Favorites;


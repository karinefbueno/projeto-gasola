import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
// import { fetchFavorites } from "../../utils/api";
import CardRepo from "../../components/CardRepo";
import { ReposProps } from "../../types/types";
import { ContainerFavoriteCard, ContainerFavorite, Title, P } from "./style";
import context from "../../Context/Context";



function Favorites() {

  const { favorited, favorites, fetchData, loading } = useContext(context);


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

          {loading ? <p>Loading...</p>
            : favorites.map((item: ReposProps) => (
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

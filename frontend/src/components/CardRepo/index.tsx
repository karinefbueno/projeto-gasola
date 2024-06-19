import { ContainerCardRepo,
   Img, ModalContainer, ModalContent, Overlay,LinkGitHub } from "./style";
import { ReposProps, UserProps } from "../../types/types";
import { fetchGitUser } from "../../utils/api";
import { useState } from "react";
import CardUser from "../CardUser";
import heart from '../../images/heart.svg';
import heartEmpty from '../../images/heart_emp.svg';

const INICIAL_VALUE = {
    name: '',
    id: '',
    location: null,
    login: '',
    avatar_url: '',
    public_repos: '',
    followers: '',
    following: '',
    created_at: '',
    html_url: '',
    isFavorite: false,
}


function CardRepo({id, login, html_url, avatar_url}: ReposProps) {
  const [user, setUser] = useState<UserProps>(INICIAL_VALUE);
  const [showUserCard, setShowUserCard] = useState<boolean>(false);

  const handleClick = async () => {
    try {
      const data = await fetchGitUser(login);
      setUser(data);
      setShowUserCard(!showUserCard);
    } catch (error) {
      console.error('Erro ao buscar dados do GitHub:', error);
    }
  };

  return (
    <>
      {showUserCard &&
        <ModalContainer>
          <Overlay onClick={() => setShowUserCard(false)} />
          <ModalContent>
            <CardUser 
              isFavorite={user.isFavorite}
              name={user.name}
              html_url={user.html_url}
              avatar_url={user.avatar_url}
              created_at={user.created_at}
              followers={user.followers}
              following={user.following}
              id={user.id}
              location={user.location}
              login={user.login}
              public_repos={user.public_repos}
              heartChecked={heart}
              heartEmpty={heartEmpty}
            />
          </ModalContent>
        </ModalContainer>
      }
      {!showUserCard &&
        <ContainerCardRepo id={id}>
         <LinkGitHub target="_blank"
         href={html_url}>GitHub</LinkGitHub>
          <button onClick={handleClick}>
            <Img src={avatar_url} alt="user-avatar" />
              <h4>{login}</h4>
          </button>
        </ContainerCardRepo>
      }
    </>
  );
}

export default CardRepo;

import { ContainerCardRepo, Img, ModalContainer, ModalContent, Overlay } from "./style";
import { ReposProps, UserProps } from "../../types/types";
import { fetchGitUser } from "../../utils/api";
import { useState } from "react";
import CardUser from "../CardUser";
import heart from '../../images/heart.svg';
import heartEmpty from '../../images/heart_emp.svg'


function CardRepo({id, owner}: ReposProps) {
  const [user, setUser] = useState<UserProps>({});
  const [showUserCard, setShowUserCard] = useState<boolean>(false);

  const handleClick = async () => {
    try {
      const data = await fetchGitUser(owner.login);
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
          <button onClick={handleClick}>
            <Img src={owner.avatar_url} alt="user-avatar" />
            <div>
              <h2>{owner.login}</h2>
              <p>{owner.html_url}</p>
            </div> 
          </button>
        </ContainerCardRepo>
      }
    </>
  );
}

export default CardRepo;

import { ContainerCardUser, ContainerInfos, ContainerName, Avatar, ContainerText, Heart } from "./style";
import { UserProps } from "../../types/types";
import { useState } from "react";

function CardUser({ id, avatar_url, created_at, followers, following, location, login, public_repos, heartChecked, heartEmpty,html_url }: UserProps) {
  const [checked, setChecked] = useState<boolean>(false);
  const [favoriteUser, setFavoriteUser] = useState<any>(null);

  const handleChange = async () => {
    if (!checked) {
      setChecked(true);
      // inserir []
      setFavoriteUser({
        id, avatar_url, login,html_url
      });
    } else {
      setChecked(false);
      // remover do bd
      setFavoriteUser(null);
    }
  };

  return (
    <ContainerCardUser>
      <Avatar src={avatar_url} alt={`${login}'s avatar`} />
      <ContainerText>
        <ContainerName>
          <h2>{login}</h2>
          <p>{created_at}</p>
        </ContainerName>
        <ContainerInfos>
          <p>
            <span>Repos</span>
            {public_repos}
          </p>
          <p>
            <span>Followers</span>
            {followers}
          </p>
          <p>
            <span>Following</span>
            {following}
          </p>
        </ContainerInfos>
        <p>{location}</p>
        <p>{html_url}</p>
      </ContainerText>
      <input
          id={`favorite-checkbox-${id}`}
          onChange={handleChange}
          checked={checked}
          type="checkbox"
          style={{ display: 'none' }} 
        />
        <label htmlFor={`favorite-checkbox-${id}`} style={{ cursor: 'pointer' }}>
          <Heart  src={checked ? heartChecked : heartEmpty} alt="favorite" />
        </label>
    </ContainerCardUser>
  );
}

export default CardUser;

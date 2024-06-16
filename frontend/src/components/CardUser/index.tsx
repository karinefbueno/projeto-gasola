import { ContainerCardUser, ContainerInfos, ContainerName, Avatar, ContainerText, Heart, IconCat, ContainerIcon } from "./style";
import {  UserProps } from "../../types/types";
import { useEffect, useState } from "react";
import { fetchCreateFavorite, fetchDeleteFavorite } from "../../utils/api";
import iconCat from "../../images/github_header.png";
import { formatarData } from "../../utils/functionFormatData";


function CardUser({ id, name, avatar_url, created_at, followers, following, location, login, public_repos, heartChecked, heartEmpty,html_url,isFavorite }: UserProps) {
  const [checked, setChecked] = useState<boolean>(isFavorite);

   useEffect(() => {
    setChecked(isFavorite);
  }, [isFavorite]);

  const body= {
    id: id,
    name: name,
    login: login,
    avatar_url: avatar_url,
    html_url: html_url,
  }

  const handleChange = async () => {
    if (!checked) {
      setChecked(true);
      await fetchCreateFavorite(body);

    } else {
      setChecked(false);
      await fetchDeleteFavorite(id)
    }
  };

  return (
    <ContainerCardUser>
      <Avatar src={avatar_url} alt={`${login}'s avatar`} />
      <ContainerText>
        <ContainerName>
          <h3>{login}</h3>
          <p>{formatarData(created_at)}</p>
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
        <div>
        <ContainerIcon>
        <p>{location}</p>
        </ContainerIcon>
        <ContainerIcon>
         <IconCat src={iconCat} alt="" />  
        <p>{html_url}</p>
        </ContainerIcon>
        </div>
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

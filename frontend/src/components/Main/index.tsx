import { ContainerMain, Input, SearchBar, ContainerCard, IconGitHub, Div } from "./style";
import { useState } from "react";
import { fetchGitHubData } from '../../utils/api';
import Button from "../Button";
import { ReposProps } from '../../types/types';
import CardRepo from "../CardRepo";
import gitCat from '../../images/github_main.png';
import { P} from '../../pages/Favorites/style';
 
const INITIAL_VALUE = {
  name: '',
};

function Main() {
  const [input, setInput] = useState(INITIAL_VALUE);
  const [repos, setRepos] = useState<ReposProps[]>([]);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  const handleClick = async () => {

    const normalizeText = (text:string) => 
    text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, '');
    
  const inputName = normalizeText(input.name);

  if (inputName.trim() !== '') {
    try {
      const data = await fetchGitHubData(inputName);
      setRepos(data.items);
      
      setIsClicked(true);
    } catch (error) {
      console.error('Erro ao buscar dados do GitHub:', error);
    }
  }
};


  return (
    <>
      <Div>
        <IconGitHub src={gitCat} />
        <ContainerMain>
          <SearchBar>
            <Input
              value={input.name}
              type="text"
              onChange={handleChange}
              placeholder="Search GitHub username..."
              name="name"
            />
            <Button onClick={handleClick} text="Search" />
          </SearchBar>
          <ContainerCard>
            {repos.length === 0 && isClicked ? (
              <P>User not found!</P>
            ) : (
              repos.map((item: ReposProps) => (
                <CardRepo
                  key={item.id}
                  id={item.id}
                  avatar_url={item.avatar_url}
                  html_url={item.html_url}
                  login={item.login}
                />
              ))
            )}
          </ContainerCard>
        </ContainerMain>
      </Div>
    </>
  );
}

export default Main;

import Header from "../../components/Header";
import Main from "../../components/Main";
import { Container } from "./style";

function Home (){
return(
  <Container>
  <Header text="Favorites" href="/favorite"/>  
  <Main/>
  </Container>
)

}

export default Home;
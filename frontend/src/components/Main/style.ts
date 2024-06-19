import styled from "styled-components";

export const ContainerMain = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`
export const SearchBar = styled.div`
display: flex;
margin-top: 60px;
justify-content: center;

Button{
  margin-top: 8px;
  margin-left: -110px;
}

@media (max-width: 600px) {
Button{
  margin-left: -60px;
}
}

`
export const Input = styled.input`
margin-bottom: 60px;
width: 700px;
font-size:20px;
height: 64px;
background-color: #444c56;
color: white;
border-radius: 10px;
padding-left: 40px;
border: none;
 &::placeholder {
    font-size: 20px;
    color: white;
    background-color: #444c56;
  }

  @media (max-width: 660px) {
  max-width: 300px;
  &::placeholder {
    font-size: 12px;
    text-align: justify;
  }
}
`

export const ContainerCard = styled.div`
justify-content: flex-start;
align-items: center;
display: flex;
flex-wrap: wrap;

@media (max-width: 660px) {
align-items: center ;
width: 100px;
height: 100px;
}

`
export const IconGitHub = styled.img`
width: 400px;
height: 400px;

@media (max-width: 660px) {
width: 100px;
height: 100px;
}
`
export const Div = styled.div`
display: flex;
justify-content: center;
margin-top: 100px;
margin-left: auto;
margin-right: auto;

@media (max-width: 660px) {
margin-top:200px;
flex-direction: column;
align-items: center;
width: 100px;
height: 100px;
}
`


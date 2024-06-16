import styled from "styled-components";

export const ContainerMain = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`
export const SearchBar = styled.div`
display: flex;
margin-top: 60px;
/* position: relative; */
justify-content: center;

Button{
  margin-top: 8px;
  margin-left: -110px;
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
`

export const ContainerCard = styled.div`
margin: auto;
justify-content: center;
display: flex;
flex-wrap: wrap;
`
export const IconGitHub = styled.img`
width: 400px;
height: 400px;
`
export const Div = styled.div`
display: flex;
justify-content: center;
margin-top: 100px;
margin-left: auto;
margin-right: auto;
`
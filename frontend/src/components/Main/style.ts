import styled from "styled-components";

export const ContainerMain = styled.div`
display: flex;
flex-direction: column;

`
export const SearchBar = styled.div`
display: flex;
position: relative;
justify-content: center;

Button{
  margin-top: 8px;
  margin-left: -110px;
}
`


export const Input = styled.input`
width: 700px;
font-size:20px;
height: 64px;
background-color: #444c56;
color: white;
border-radius: 10px;
padding-left: 40px;
 &::placeholder {
    font-size: 20px;
    color: white;
  }
`

export const ContainerCard = styled.div`
margin-top: 60px, auto;
display: flex;
flex-wrap: wrap;
`


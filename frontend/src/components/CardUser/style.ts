import styled from "styled-components";

export const Avatar = styled.img`
margin-left: 20px;
margin-top: 100px;
width: 200px;
height: 200px;
border-radius: 100px;
`
export const ContainerText =styled.div`
margin-top: 100px;
padding-left: 50px;
`
export const ContainerCardUser =styled.div`
padding: 20px;
display: flex;
justify-content: center;
align-items: flex-start;
width: 800px;
font-size:20px;
height: 500px;
background-color: #545d68;
color: white;
border-radius: 20px;

@media (max-width: 660px) {
width:auto;
flex-direction: column;
align-items: center;
justify-content:center;
font-size: 12px;
height: auto;
padding: 16px;

}
`
export const Heart =styled.img`
margin-left: -30px;
 width: 40px;
 height: 40px ;
`

export const IconCat =styled.img`
  width: 30px;
  height: 30px;
`

export const ContainerIcon =styled.div`
display: flex;
align-items: center;
gap: 16px;
margin-top: 20px;

a{
  text-decoration: none;
  color:white;
}
`
export const ContainerName =styled.div`
display: flex;
justify-content: space-between;
gap: 30px;
width: auto;
font-size:20px;
height: 70px;
color: white;
`
export const ContainerInfos =styled.div`
display: flex;
text-align: justify;
justify-content: space-around;
align-items:center;
margin-bottom: 30px;
width: auto;
font-size:20px;
height: 150px;
background-color: rgb(13, 17, 23);
color: white;
border-radius: 10px;

/* @media (max-width: 660px) {
width: 100px;
height: 100px;
} */

p{
  display: flex;
  gap: 10px;
  flex-direction: column;
}
`

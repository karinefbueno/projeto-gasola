import styled from "styled-components";

export const ComponentHeader = styled.header`
display: flex;
align-items: center;
justify-content:space-between;
padding-top: 16px;
  height: 100px;
  margin-bottom: 40px;
  width: 90%;
  top: 0px;
  position: fixed;
  border-bottom:1px solid #444c56;
  z-index: 1000;
  background-color: rgba(1, 13, 17);
  
  a {
color: #c5d1de;
font-size: 30px;
margin-right: 60px;
text-decoration: none;
}
`;

export const Icon = styled.img`
width: 50px;
height: 50px;
`



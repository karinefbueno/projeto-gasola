import styled from "styled-components";

export const ContainerCardRepo = styled.div`
  padding: 20px;
  margin: 30px;
  width: 300px;
  font-size: 20px;
  height: 200px;
  color: white;
  border-radius: 10px;
  border:1px solid #444c56;


button {
  width: 100%;
  height: 80%;
  font-size: 18px;
  border: none;
  background-color: transparent;
  color: #c5d1de;
  border-radius: 50%;
  transition: background-color 0.3s ease, color 0.3s ease; 
}

button:hover {
  background-color: rgba(197, 209, 222, 0.2); 
  color: #ffffff; 
  cursor: pointer;
}
`

export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-bottom: 8px;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 10px;
  background-color: transparent;
  z-index: 1001;
`;

export const LinkGitHub = styled.a`
font-size: 12px;
color: #316dca;
text-decoration: none;
`

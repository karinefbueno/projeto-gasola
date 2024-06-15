import styled from "styled-components";

export const ContainerCardRepo = styled.div`
  margin: 30px;
  width: 300px;
  font-size: 20px;
  height: 200px;
  background-color: #444c56;
  color: white;
  border-radius: 10px;

  button {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #444c56;
  }
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
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

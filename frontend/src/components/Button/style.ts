import styled from "styled-components";

export const ComponentButton = styled.button`
    width: 100px;
    height: 48px;
    border-radius:8px;
    color: white;
    background-color: #316dca;
    font-size: 18px;
    border: none;

    @media (max-width: 660px) {    
    margin-left: 10px;
    width: 50px;
    height: 50px;
    font-size: 12px;
    margin-top: 8px;
}
`
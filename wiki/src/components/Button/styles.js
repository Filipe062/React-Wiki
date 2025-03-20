import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: #fafafa;
  border: 1px solid #fafafa;
  border-radius: 20px;
  height: 62px;
  width: 200px; /* Ajustei para um tamanho mais confortável */
  margin: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fafafa40;
    cursor: pointer;
  }
`;

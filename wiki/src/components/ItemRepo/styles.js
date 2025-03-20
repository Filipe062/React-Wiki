import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #1c1c1c;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  h3 {
    font-size: 24px;
    color: #fafafa;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #fafafa80;
    margin-bottom: 15px;
  }

  a {
    display: inline-block;
    text-decoration: none;
    font-weight: bold;
    color: rgb(255, 69, 58);
    margin-right: 15px;
    transition: color 0.3s;

    &:hover {
      color: rgb(200, 30, 30);
    }
  }

  button.remover {
    background: transparent;
    border: 2px solid rgb(255, 69, 58);
    color: rgb(255, 69, 58);
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;

    &:hover {
      background: rgb(255, 69, 58);
      color: white;
    }
  }

  hr {
    border: none;
    height: 1px;
    background: #fafafa40;
    margin: 20px 0;
  }
`;

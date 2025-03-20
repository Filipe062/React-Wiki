import React from "react";
import { ItemContainer } from "./styles";

function ItemRepo({ repo, removeRepo }) {
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} rel="noreferrer" target="_blank">
        Ver Repositório
      </a>
      <button className="remover" onClick={() => removeRepo(repo.id)}>
        Remover
      </button>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;

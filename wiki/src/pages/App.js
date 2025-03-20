import { useState } from "react";
import gitLogo from "../assets/github.png";
import Button from "../components/Button";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import { api } from "../services/api";
import { Container } from "./styles";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    if (!currentRepo) {
      alert("Digite o nome do repositório!");
      return;
    }

    try {
      const { data } = await api.get(`/repos/${currentRepo}`);

      const isExist = repos.find((repo) => repo.id === data.id);

      if (!isExist) {
        setRepos((prev) => [...prev, data]);
      } else {
        alert("Este repositório já está na lista!");
      }
    } catch (error) {
      console.error("Erro ao buscar repositório:", error.response?.data || error.message);
      alert("Erro ao buscar o repositório. Verifique o nome e tente novamente.");
    }
  };

  const removeRepo = (id) => {
    const filteredRepos = repos.filter((repo) => repo.id !== id);
    setRepos(filteredRepos);
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="GitHub logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo key={repo.id} repo={repo} removeRepo={removeRepo} />
      ))}
    </Container>
  );
}

export default App;

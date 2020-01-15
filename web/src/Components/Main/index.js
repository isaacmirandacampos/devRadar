import React, { useState, useEffect } from "react";

import { Container, Profile } from "./styles";
import api from "../../services/api";

export default function Main() {
  const [devs, setDevs] = useState([]);
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }
    loadDevs();
  }, []);
  console.log(devs);

  return (
    <Container>
      {devs.map(dev => (
        <Profile key={dev._id}>
          <header>
            <img src={dev.avatar_url} alt={dev.name} />
            <div>
              <strong>{dev.name}</strong>
              <span>{dev.techs}</span>
            </div>
          </header>
          <div>
            <p>{dev.bio}</p>
          </div>
          <a href={`https://github.com/${dev.github_username}`}>
            Acessar perfil do Github
          </a>
        </Profile>
      ))}
    </Container>
  );
}

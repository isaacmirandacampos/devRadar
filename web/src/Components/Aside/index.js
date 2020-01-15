import React, { useState, useEffect } from "react";

import { Container, Form, InputBlock, InputGroup } from "./styles";

import api from "../../services/api";

export default function Aside() {
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
    const response = await api.post("/devs", {
      github_username,
      techs,
      latitude,
      longitude
    });
    setGithubUsername("");
    setTechs("");
  }

  return (
    <Container>
      <p>Cadastrar</p>
      <Form onSubmit={handleAddDev}>
        <InputBlock>
          <label htmlFor="github_username">Usuário do github</label>
          <input
            name="github_username"
            value={github_username}
            onChange={e => setGithubUsername(e.target.value)}
            required
            id="github_username"
          />
        </InputBlock>
        <InputBlock>
          <label htmlFor="Tecnologias">Tecnologias</label>
          <input
            name="Tecnologias"
            value={techs}
            onChange={e => setTechs(e.target.value)}
            required
            id="Tecnologias"
          />
        </InputBlock>
        <InputGroup>
          <InputBlock>
            <label htmlFor="Latitude">Latitude</label>
            <input
              type="number"
              name="Latitude"
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
              required
              id="Latitude"
            />
          </InputBlock>
          <InputBlock>
            <label htmlFor="Longitude">Longitude</label>
            <input
              type="number"
              name="Longitude"
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
              required
              id="Longitude"
            />
          </InputBlock>
        </InputGroup>
        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}

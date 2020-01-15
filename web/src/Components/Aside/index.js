import React from "react";

import {
  Container,
  Form,
  InputBlock,
  InputGroup,
  ButtonSubmit
} from "./styles";

export default function Aside() {
  return (
    <Container>
      <p>Cadastrar</p>
      <Form>
        <InputBlock>
          <label htmlFor="github_username">Usuário do github</label>
          <input name="github_username" required id="github_username" />
        </InputBlock>
        <InputBlock>
          <label htmlFor="Tecnologias">Tecnologias</label>
          <input name="Tecnologias" required id="Tecnologias" />
        </InputBlock>
        <InputGroup>
          <InputBlock>
            <label htmlFor="Latitude">Latitude</label>
            <input name="Latitude" required id="Latitude" />
          </InputBlock>
          <InputBlock>
            <label htmlFor="Longitude">Longitude</label>
            <input name="Longitude" required id="Longitude" />
          </InputBlock>
        </InputGroup>
        <button>Salvar</button>
      </Form>
    </Container>
  );
}

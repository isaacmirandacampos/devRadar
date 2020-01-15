import React from "react";

import { Profile } from "./styles";

export default function Dev({ data: dev }) {
  return (
    <Profile>
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
  );
}

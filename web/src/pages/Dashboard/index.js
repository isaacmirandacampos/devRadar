import React from "react";

import Aside from "../../Components/Aside";
import Main from "../../Components/Main";
import { Container } from "./styles";

export default function Dashboard() {
  return (
    <Container>
      <Aside />
      <Main />
    </Container>
  );
}

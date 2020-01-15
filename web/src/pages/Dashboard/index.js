import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import DevForm from "../../Components/DevForm";
import Dev from "../../Components/Dev";
import api from "../../services/api";

export default function Dashboard() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);
    setDevs([...devs, response.data]);
  }

  return (
    <Container>
      <DevForm onSubmit={handleAddDev} />
      <div className="dev">
        {devs.map(dev => (
          <Dev key={dev._id} data={dev} />
        ))}
      </div>
    </Container>
  );
}

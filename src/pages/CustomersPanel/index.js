import React from "react";

import personIcon from "../../assets/Raster.png";
import { Container, Title } from "./styles";

function CustomersPanel() {
  return (
    <Container>
      <Title>
        <img src={personIcon} alt="Painel de clientes" />
        <h2>Painel de clientes</h2>
      </Title>
    </Container>
  );
}

export default CustomersPanel;

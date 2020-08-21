import React from "react";

import personIcon from "../../../assets/Raster.png";
import { Container, Title } from "./styles";

function CustomersPanelLayout({ children }) {
  return (
    <Container>
      <Title>
        <img src={personIcon} alt="Painel de clientes" />
        <h2>Painel de clientes</h2>
      </Title>
      {children}
    </Container>
  );
}

export default CustomersPanelLayout;

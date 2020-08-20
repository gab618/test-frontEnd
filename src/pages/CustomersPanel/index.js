import React from "react";

import Button from "../../components/Button";
import personIcon from "../../assets/Raster.png";
import { Container, Title, Content, CustomerWrapper } from "./styles";

function CustomersPanel() {
  function Customer({ status }) {
    const statusValue = {
      "0": "Desavitvado",
      "1": "Ativo",
      "2": "Inativo",
      "3": "Aguardando ativação",
    };
    return (
      <CustomerWrapper>
        <div>
          <strong>John Doe</strong>
          <span>john_doe@test.com</span>
        </div>
        <div>
          <strong>123.456.789-00</strong>
          <span>(11) 9998-8745</span>
        </div>
        <div className="status">
          <div className={`status-sign status-${status}`}></div>
          <span>{statusValue[status]}</span>
        </div>
        <Button outlined>Editar</Button>
      </CustomerWrapper>
    );
  }

  return (
    <Container>
      <Title>
        <img src={personIcon} alt="Painel de clientes" />
        <h2>Painel de clientes</h2>
      </Title>
      <Content>
        <div className="description">
          <div className="description-text">
            <strong>Listagem de usuários</strong>
            <span>Escolha um cliente para visualizar os detalhes</span>
          </div>
          <Button>Novo cliente</Button>
        </div>

        {[1, 2, 3, 0].map((c) => (
          <Customer status={c} />
        ))}
        <span>Exibindo 4 clientes</span>
      </Content>
    </Container>
  );
}

export default CustomersPanel;

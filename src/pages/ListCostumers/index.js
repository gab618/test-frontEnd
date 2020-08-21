import React from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import { Container, CustomerWrapper } from "./styles";

import CustomersPanelLayout from "../_layouts/CustomersPanel";

function ListCostumers() {
  function Customer({ status }) {
    const statusValue = {
      "0": "Desativado",
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
    <CustomersPanelLayout>
      <Container>
        <div className="description">
          <div className="description-text">
            <strong>Listagem de usuários</strong>
            <span>Escolha um cliente para visualizar os detalhes</span>
          </div>
          <Link to="new_user">
            <Button>Novo cliente</Button>
          </Link>
        </div>

        {[1, 2, 3, 0].map((c) => (
          <Customer status={c} />
        ))}
        <span>Exibindo 4 clientes</span>
      </Container>
    </CustomersPanelLayout>
  );
}

export default ListCostumers;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import { Container, CustomerWrapper } from "./styles";

import CustomersPanelLayout from "../_layouts/CustomersPanel";

function ListCostumers() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const localCustomers = localStorage.getItem("customers");
    if (localCustomers) {
      setCustomers(JSON.parse(localCustomers));
    }
  }, []);

  function Customer({ customer }) {
    const statusValue = {
      "0": "Desativado",
      "1": "Ativo",
      "2": "Inativo",
      "3": "Aguardando ativação",
    };

    return (
      <CustomerWrapper>
        <div>
          <strong>{customer.name}</strong>
          <span>{customer.email}</span>
        </div>
        <div>
          <strong>{customer.cpf}</strong>
          <span>{customer.phone}</span>
        </div>
        <div className="status">
          <div className={`status-sign status-${customer.status}`}></div>
          <span>{statusValue[customer.status]}</span>
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

        {customers.map((c) => (
          <Customer customer={c} key={c.name} />
        ))}
        <span>Exibindo {customers.length} clientes</span>
      </Container>
    </CustomersPanelLayout>
  );
}

export default ListCostumers;

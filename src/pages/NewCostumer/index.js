import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Select } from "@rocketseat/unform";
import Button from "../../components/Button";

import { Container, ButtonsContainer } from "./styles";

import CustomersPanelLayout from "../_layouts/CustomersPanel";

function NewCostumer() {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const localCustomers = localStorage.getItem("customers");
    if (localCustomers) {
      setCustomers(JSON.parse(localCustomers));
    }
  }, []);

  const options = [
    { id: "0", title: "Desativado" },
    { id: "1", title: "Ativo" },
    { id: "2", title: "Inativo" },
    { id: "3", title: "Aguardando ativação" },
  ];

  function handleSubmit({ name, email, cpf, phone, status }) {
    localStorage.setItem(
      "customers",
      JSON.stringify([...customers, { name, email, cpf, phone, status }])
    );
    navigate("/");
  }

  return (
    <CustomersPanelLayout>
      <Container>
        <div className="description">
          <div className="description-text">
            <strong>Novo usuário</strong>
            <span>Informe os campos a seguir para criar novo usuário:</span>
          </div>
        </div>

        <Form onSubmit={handleSubmit}>
          <Input name="name" type="text" placeholder="Nome" />
          <Input name="email" type="email" placeholder="E-mail" />
          <Input name="cpf" type="text" placeholder="CPF" />
          <Input name="phone" type="text" placeholder="Telefone" />
          <Select name="status" options={options} placeholder="Status" />
          <ButtonsContainer>
            <Button type="submit">Criar</Button>
            <Link to="/">
              <Button outlined>Voltar</Button>
            </Link>
          </ButtonsContainer>
        </Form>
      </Container>
    </CustomersPanelLayout>
  );
}

export default NewCostumer;

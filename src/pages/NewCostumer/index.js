import React from "react";

import { Link } from "react-router-dom";
import { Form, Input, Select } from "@rocketseat/unform";
import Button from "../../components/Button";

import { Container, ButtonsContainer } from "./styles";

import CustomersPanelLayout from "../_layouts/CustomersPanel";

function NewCostumer() {
  const options = [
    { id: "0", title: "Desativado" },
    { id: "1", title: "Ativo" },
    { id: "2", title: "Inativo" },
    { id: "3", title: "Aguardando ativação" },
  ];

  function handleSubmit() {
    alert("Sem API no momento :/");
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
          <Input name="name" type="email" placeholder="Nome" />
          <Input name="email" type="text" placeholder="E-mail" />
          <Input name="id" type="text" placeholder="CPF" />
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

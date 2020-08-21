import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/uol-lg.png";
import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Uol host" />
      </Link>
    </Container>
  );
}

export default Header;

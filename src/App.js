import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ListCostumers from "./pages/ListCostumers";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<ListCostumers />} />
        <Route path="/new_user" element={<h1>New user</h1>} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;

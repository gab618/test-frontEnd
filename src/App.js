import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header";
import ListCostumers from "./pages/ListCostumers";
import NewCostumer from "./pages/NewCostumer";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<ListCostumers />} />
        <Route path="/new_user" element={<NewCostumer />} />
      </Routes>
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;

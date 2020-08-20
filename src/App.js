import React from "react";
import GlobalStyles from "./styles/GlobalStyles";

import Header from "./components/Header";
import CustomersPanel from "./pages/CustomersPanel";

function App() {
  return (
    <>
      <Header />
      <CustomersPanel />
      <GlobalStyles />
    </>
  );
}

export default App;

import React from "react";
import { Router } from "@reach/router";
import Home from "./common/Home";
import About from "./common/About";

const App: React.FC = () => {
  return (
    <Router>
      <Home path="/" />
      <About path="/about" />
    </Router>
  );
};

export default App;

import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./components";
import Home from "./pages/HomePage/Home";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/sign-up" exact component={LoginPage} />
    </Router>
  );
}

export default App;

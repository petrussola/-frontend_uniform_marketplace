import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

// components
import MarketingPage from "./components/marketingPage/MarketingPage";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={MarketingPage} />
    </Switch>
  );
};

render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

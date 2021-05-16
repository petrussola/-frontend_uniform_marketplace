import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import MarketingPage from "../components/marketingPage/MarketingPage";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Signup from "../components/auth/Signup";
import Login from "../components/auth/Login";

export default function Routes() {
  return (
    <>
      <Route exact path="/" component={NavBar} />
      <Switch>
        <Route exact path="/" component={MarketingPage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <Route exact path="/" component={Footer} />
    </>
  );
}

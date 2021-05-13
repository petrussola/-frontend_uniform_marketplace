import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Flex } from "@chakra-ui/react";

// components
import MarketingPage from "./components/marketingPage/MarketingPage";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Flex
      direction="column"
      justify="space-between"
      minH="100vh"
      bg="#FCFCFC"
      px={[2, 2, 4, 4, 4]}
    >
      <Route path="/" component={NavBar} />
      <Switch>
        <Route exact path="/" component={MarketingPage} />
      </Switch>
      <Route path="/" component={Footer} />
    </Flex>
  );
};

render(
  <React.StrictMode>
    <Router>
      <ChakraProvider resetCSS>
        <App />
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

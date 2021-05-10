import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

import styled from "styled-components";

import uniformOne from "../../media/uniform_1.jpg";

const StyledDiv = styled.div`
  background-color: #fcfcfc;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 1000px) {
    height: auto;
  }
`;

const StyledJumbotron = styled(Jumbotron)`
  background-color: inherit;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  height: 60vh;
  @media (max-width: 1000px) {
    height: auto;
  }
  span {
    color: #15a545;
  }
  .parts-jumbotron {
    width: 50%;
    height: 100%;
    padding: 0;
    @media (max-width: 1000px) {
      width: 100%;
      height: auto;
      padding: 0.5rem 0;
    }
  }
  .right-jumbotron {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
      height: 120%;
      border-radius: 0.3rem;
      box-shadow: 0.5rem 0.5rem 20px gray;
      @media (max-width: 1000px) {
        width: 100%;
        height: auto;
      }
    }
  }
  h1 {
    font-size: 2.5rem;
    padding: 0.2rem 0;
    @media (max-width: 1000px) {
      font-size: 2rem;
    }
  }
  p {
    padding: 0.2rem 0;
    font-size: 1.5rem;
    @media (max-width: 1000px) {
      font-size: 1.25rem;
    }
  }
`;

const StyledButton = styled(Button)`
  background-color: #15a545;
  border-color: #15a545;
  :disabled {
    background-color: #15a545;
    border-color: #15a545;
    opacity: 1;
  }
`;

const StyledFooter = styled.footer`
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
  padding-top: 1rem;
  margin-bottom: 0;
  text-align: center;
  background-color: #f3f3f3;
  color: #959595;
  @media (max-width: 600px) {
    position: static;
    padding: 0.5rem 0;
    p {
      margin: 0;
    }
  }
`;

export default function MarketingPage() {
  return (
    <StyledDiv>
      <Navbar expand="lg">
        <Navbar.Brand>Share Uniforms</Navbar.Brand>

        {process.env.REACT_APP_IS_SITE_LIVE === "false" ? null : (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/login">Sign In</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Navbar>
      <StyledJumbotron>
        <div className="left-jumbotron parts-jumbotron">
          <h1>
            School uniforms are expensive, and kids outgrow them.
            <span> Very fast.</span>
          </h1>
          <p>
            Marketplace for communities of parents to donate or sell school
            uniforms so others can reuse them.
          </p>
          <StyledButton size="lg" block disabled>
            Coming soon to your local school
          </StyledButton>
        </div>
        <div className="right-jumbotron parts-jumbotron">
          <img src={uniformOne} alt="school uniform" />
        </div>
      </StyledJumbotron>
      <StyledFooter>
        <p>
          © 2021 ShareUniforms.com. All rights reserved. Made with{" "}
          <span role="img" aria-label="green heart">
            💚
          </span>{" "}
          by <a href="https://www.peresola.com">peresola.com</a>
        </p>
      </StyledFooter>
    </StyledDiv>
  );
}

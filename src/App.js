import "./App.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <span
              style={{ color: "caramel", fontSize: "35px", fontWeight: "bold" }}
            >
              KIU
            </span>
            <span style={{ fontSize: "20px" }}>: PaperPal</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
        <Button variant="primary">Login</Button>{' '}
      <Button variant="success" style={{marginLeft:'10px', marginRight:'10px'}}>Signup</Button>{' '}
      </Navbar>
      <header className="App-header">
        <h1>PaperPal</h1>
        <p>"Unleash Your Academic Potential with PaperPal!"</p>
      </header>
    </div>
  );
}

export default App;

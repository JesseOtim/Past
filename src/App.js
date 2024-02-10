import "./App.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="d-flex justify-content-center align-items-center">
          <Navbar.Brand href="#home">
            <span className="squiggly-text"
              style={{ color: "Orangered", fontSize: "35px", fontWeight: "bold" }}
            >
              KIU  
            </span>
            <span style={{ fontSize: "34px" }}> Past Papers : PaperPal</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
        <Button variant="primary" style={{borderRadius:'35%', fontWeight:'bold'}} onClick={handleShow}>
        Login
      </Button>
      <Button variant="danger" style={{marginLeft:'10px', marginRight:'10px', borderRadius:'35%', fontWeight:'bold'}} onClick={handleShow}>
        Signup
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </Navbar>
      <header className="App-header">
        <h1>PaperPal</h1>
        <p>"Unleash Your Academic Potential with PaperPal!"</p>
        <div className="circle"></div> {/* Circle */}
      </header>
      
    </div>
  );
}

export default App;

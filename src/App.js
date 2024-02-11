import "./App.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import setValidated from "react";
import validated from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const [validated, setValidated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginShow = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  const handleSignupShow = () => setShowSignup(true);
  const handleSignupClose = () => setShowSignup(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="d-flex justify-content-center align-items-center">
          <Navbar.Brand href="#home">
            <span
              style={{
                color: "Orangered",
                fontSize: "35px",
                fontWeight: "bold",
              }}
            >
              KIU
            </span>
            <span style={{ fontSize: "34px" }}> Past Papers : PaperPal</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
        <Button
          variant="primary"
          style={{ borderRadius: "35%", fontWeight: "bold" }}
          onClick={handleLoginShow}
        >
          Login
        </Button>
        <Button
          variant="success"
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            borderRadius: "35%",
            fontWeight: "bold",
          }}
          onClick={handleSignupShow}
        >
          Signup
        </Button>

        <Modal show={showLogin} onHide={handleLoginClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{ fontWeight: "bold", textAlign: "center" }}>
              Login
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row>
                <Form.Group md="4" controlId="validationCustom01">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Email"
                    defaultValue=""
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter your Email
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group md="6" controlId="validationCustom03">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text" placeholder="City" required />
                  <Form.Control.Feedback type="invalid">
                    Please Enter your Password
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Button type="submit" className="div">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        {/* SIGNUP */}
        <Modal show={showSignup} onHide={handleSignupClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{ fontWeight: "bold", textAlign: "center" }}>
              Signup
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  defaultValue=""
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter your First name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  defaultValue=""
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter your Last name
                </Form.Control.Feedback>
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom02">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="johndoe@gmail.com"
                    defaultValue=""
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter your Email Address
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom02">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Password"
                    defaultValue=""
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter your Password
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Navbar>
      <header className="App-header">
        <h1>PaperPal</h1>
        <p>"Unleash Your Academic Potential with PaperPal!"</p>
        <div className="circle"></div> {/* Circle */}
      </header>
      <Container className="d-flex justify-content-center align-items-center" style={{marginTop:'100px', color:'brown'}}>
        <h1 style={{fontSize:'50px', fontWeight:'bolder'}}>Introducing a CHEAT CODE</h1>
      </Container>
      <Container>
      <Row>
        <Col> <Accordion defaultActiveKey="0" style={{marginTop:'25px'}}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion></Col>
      </Row>
    </Container>
     
    </div>
  );
}

export default App;

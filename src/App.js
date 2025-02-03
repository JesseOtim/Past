import "./App.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import { useState } from "react";
// import setValidated from "react";
// import validated from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Product from "./product";
import { BrowserRouter as Router } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

// const [show, setShow] = useState(false);

// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);
// const [validated, setValidated] = useState(false);
function App() {
  // Comment out these state declarations and handlers
  // const [showLogin, setShowLogin] = useState(false);
  // const [showSignup, setShowSignup] = useState(false);
  // const handleLoginShow = () => setShowLogin(true);
  // const handleLoginClose = () => setShowLogin(false);
  // const handleSignupShow = () => setShowSignup(true);
  // const handleSignupClose = () => setShowSignup(false);
  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   setValidated(true);
  // };

  return (
    <Router>
      <div className="App">
        <Navbar expand="lg" className="bg-body-tertiary sticky-top">
          <Container fluid>
            <Row className="w-100 justify-content-center">
              <Col xs="auto" className="d-flex justify-content-center">
                <Navbar.Brand href="#home">
                  <span
                    style={{
                      color: "Orangered",
                      fontSize: "clamp(20px, 5vw, 35px)",
                      fontWeight: "bold",
                    }}
                  >
                    KIU
                  </span>
                  <span
                    style={{
                      fontSize: "clamp(18px, 5vw, 34px)",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Past Papers
                    {/* : PaperPal */}
                  </span>
                </Navbar.Brand>
              </Col>
              <Col xs="auto" className="d-flex align-items-center">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
              </Col>
            </Row>
            <Navbar.Collapse id="basic-navbar-nav">
              {/* Comment out the login/signup buttons
              <div className="d-flex align-items-center ms-auto">
                <Button
                  variant="primary"
                  className="rounded-pill me-2 me-lg-3"
                  style={{ fontWeight: "bold", whiteSpace: "nowrap" }}
                  onClick={handleLoginShow}
                >
                  Login
                </Button>
                <Button
                  variant="success"
                  className="rounded-pill"
                  style={{ fontWeight: "bold", whiteSpace: "nowrap" }}
                  onClick={handleSignupShow}
                >
                  Signup
                </Button>
              </div>
              */}
            </Navbar.Collapse>
          </Container>
          {/* Comment out both modal components
          <Modal show={showLogin} onHide={handleLoginClose}>
            <Modal.Header closeButton>
              <Modal.Title style={{ fontWeight: "bold", textAlign: "center" }}>
                Login
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                <Button type="submit"className="d-block mx-auto">
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>

          <Modal show={showSignup} onHide={handleSignupClose}>
            <Modal.Header closeButton>
              <Modal.Title style={{ fontWeight: "bold", textAlign: "center" }}>
                Signup
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                {
                  <Link to="/product">
                    <Button variant="success" type="submit">
                      Submit
                    </Button>
                  </Link>
                }

                <Routes>
                  <Route path="/" exact component={<App />} />
                  <Route path="/product" component={<Product />} />
                </Routes>
              </Form>
            </Modal.Body>
          </Modal>
          */}
        </Navbar>
        <header className="App-header">
          <h1 style={{ fontSize: "85px", color: "orangered" }}>PaperPal</h1>
          <p style={{ fontSize: "35px" }}>
            "Unleash Your Academic Potential with PaperPal!"
          </p>
          {/* <div className="circle"></div> Circle */}
        </header>
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ marginTop: "100px", color: "green" }}
        >
          {/* <h1 style={{ fontSize: "50px", fontWeight: "bolder", color: "orangered" }}>
            Introducing your Academic friend
          </h1> */}
        </Container>
        {/* <Container>
          <p
            style={{ fontSize: "25px", fontWeight: "bold", color: "black" }}
          >
            A helping hand at every turn
          </p>
        </Container> */}

        {/* Accordion Section */}
        <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
          {/* <h2
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: "green",
            }}
          >
            Browse Past Papers by Category
          </h2> */}
          <Row>
            <Col md={4}>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span style={{ flex: 1 }}>Law</span>
                    <span className="accordion-toggle">+</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Accordion flush>
                      <Accordion.Item eventKey="0-0">
                        <Accordion.Header>Criminal Law</Accordion.Header>
                        <Accordion.Body>
                          <Accordion flush>
                            {[2024, 2023, 2022, 2021, 2020].map((year, index) => (
                              <Accordion.Item eventKey={`0-0-${index}`} key={year}>
                                <Accordion.Header>{year}</Accordion.Header>
                                <Accordion.Body>
                                  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                    <li>Paper 1</li>
                                    <li>Paper 2</li>
                                    <li>Paper 3</li>
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                            ))}
                          </Accordion>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="0-1">
                        <Accordion.Header>Constitutional Law</Accordion.Header>
                        <Accordion.Body>
                          <Accordion flush>
                            {[2024, 2023, 2022, 2021, 2020].map((year, index) => (
                              <Accordion.Item eventKey={`0-1-${index}`} key={year}>
                                <Accordion.Header>{year}</Accordion.Header>
                                <Accordion.Body>
                                  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                    <li>Paper 1</li>
                                    <li>Paper 2</li>
                                    <li>Paper 3</li>
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                            ))}
                          </Accordion>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="0-2">
                        <Accordion.Header>Contract Law</Accordion.Header>
                        <Accordion.Body>
                          <Accordion flush>
                            {[2024, 2023, 2022, 2021, 2020].map((year, index) => (
                              <Accordion.Item eventKey={`0-2-${index}`} key={year}>
                                <Accordion.Header>{year}</Accordion.Header>
                                <Accordion.Body>
                                  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                    <li>Paper 1</li>
                                    <li>Paper 2</li>
                                    <li>Paper 3</li>
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                            ))}
                          </Accordion>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="0-3">
                        <Accordion.Header>International Law</Accordion.Header>
                        <Accordion.Body>
                          <Accordion flush>
                            {[2024, 2023, 2022, 2021, 2020].map((year, index) => (
                              <Accordion.Item eventKey={`0-3-${index}`} key={year}>
                                <Accordion.Header>{year}</Accordion.Header>
                                <Accordion.Body>
                                  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                    <li>Paper 1</li>
                                    <li>Paper 2</li>
                                    <li>Paper 3</li>
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                            ))}
                          </Accordion>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col md={4}>
              <Accordion flush>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span style={{ flex: 1 }}>Mass Communication</span>
                    <span className="accordion-toggle">+</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Accordion flush>
                      <Accordion.Item eventKey="1-0">
                        <Accordion.Header>Journalism</Accordion.Header>
                        <Accordion.Body>
                          <Accordion flush>
                            {[2024, 2023, 2022, 2021, 2020].map((year, index) => (
                              <Accordion.Item eventKey={`1-0-${index}`} key={year}>
                                <Accordion.Header>{year}</Accordion.Header>
                                <Accordion.Body>
                                  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                    <li>News Writing</li>
                                    <li>Feature Writing</li>
                                    <li>Investigative Journalism</li>
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                            ))}
                          </Accordion>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1-1">
                        <Accordion.Header>Public Relations</Accordion.Header>
                        <Accordion.Body>
                          <Accordion flush>
                            {[2024, 2023, 2022, 2021, 2020].map((year, index) => (
                              <Accordion.Item eventKey={`1-1-${index}`} key={year}>
                                <Accordion.Header>{year}</Accordion.Header>
                                <Accordion.Body>
                                  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                    <li>PR Strategies</li>
                                    <li>Crisis Communication</li>
                                    <li>Media Relations</li>
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                            ))}
                          </Accordion>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1-2">
                        <Accordion.Header>Political Thoughts</Accordion.Header>
                        <Accordion.Body>
                          <Accordion flush>
                            {[2024, 2023, 2022, 2021, 2020].map((year, index) => (
                              <Accordion.Item eventKey={`1-2-${index}`} key={year}>
                                <Accordion.Header>{year}</Accordion.Header>
                                <Accordion.Body>
                                  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                    <li>Classical Political Thought</li>
                                    <li>Modern Political Thought</li>
                                    <li>Contemporary Political Thought</li>
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                            ))}
                          </Accordion>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1-3">
                        <Accordion.Header>Political Science</Accordion.Header>
                        <Accordion.Body>
                          <Accordion flush>
                            {[2024, 2023, 2022, 2021, 2020].map((year, index) => (
                              <Accordion.Item eventKey={`1-3-${index}`} key={year}>
                                <Accordion.Header>{year}</Accordion.Header>
                                <Accordion.Body>
                                  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                    <li>Comparative Politics</li>
                                    <li>International Relations</li>
                                    <li>Political Theory</li>
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                            ))}
                          </Accordion>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1-4">
                        <Accordion.Header>English</Accordion.Header>
                        <Accordion.Body>
                          <Accordion flush>
                            {[2024, 2023, 2022, 2021, 2020].map((year, index) => (
                              <Accordion.Item eventKey={`1-4-${index}`} key={year}>
                                <Accordion.Header>{year}</Accordion.Header>
                                <Accordion.Body>
                                  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                    <li>Literature</li>
                                    <li>Language Studies</li>
                                    <li>Creative Writing</li>
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                            ))}
                          </Accordion>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1-5">
                        <Accordion.Header>Macro Economics</Accordion.Header>
                        <Accordion.Body>
                          <Accordion flush>
                            {[2024, 2023, 2022, 2021, 2020].map((year, index) => (
                              <Accordion.Item eventKey={`1-5-${index}`} key={year}>
                                <Accordion.Header>{year}</Accordion.Header>
                                <Accordion.Body>
                                  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                    <li>National Income</li>
                                    <li>Monetary Policy</li>
                                    <li>Economic Growth</li>
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                            ))}
                          </Accordion>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1-6">
                        <Accordion.Header>Micro Economics</Accordion.Header>
                        <Accordion.Body>
                          <Accordion flush>
                            {[2024, 2023, 2022, 2021, 2020].map((year, index) => (
                              <Accordion.Item eventKey={`1-6-${index}`} key={year}>
                                <Accordion.Header>{year}</Accordion.Header>
                                <Accordion.Body>
                                  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                    <li>Consumer Theory</li>
                                    <li>Market Structures</li>
                                    <li>Production Theory</li>
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                            ))}
                          </Accordion>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1-7">
                        <Accordion.Header>PhotoJournalism</Accordion.Header>
                        <Accordion.Body>
                          <Accordion flush>
                            {[2024, 2023, 2022, 2021, 2020].map((year, index) => (
                              <Accordion.Item eventKey={`1-7-${index}`} key={year}>
                                <Accordion.Header>{year}</Accordion.Header>
                                <Accordion.Body>
                                  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                    <li>Photo Editing</li>
                                    <li>Visual Storytelling</li>
                                    <li>Documentary Photography</li>
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                            ))}
                          </Accordion>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col md={4}>
              <Accordion flush>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span style={{ flex: 1 }}>Business Administration</span>
                    <span className="accordion-toggle">+</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Accordion flush>
                      <Accordion.Item eventKey="2-0">
                        <Accordion.Header>Marketing</Accordion.Header>
                        <Accordion.Body>
                          <Accordion flush>
                            {[2024, 2023, 2022, 2021, 2020].map((year, index) => (
                              <Accordion.Item eventKey={`2-0-${index}`} key={year}>
                                <Accordion.Header>{year}</Accordion.Header>
                                <Accordion.Body>
                                  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                    <li>Digital Marketing</li>
                                    <li>Consumer Behavior</li>
                                    <li>Brand Management</li>
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                            ))}
                          </Accordion>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2-1">
                        <Accordion.Header>Finance</Accordion.Header>
                        <Accordion.Body>
                          <Accordion flush>
                            {[2024, 2023, 2022, 2021, 2020].map((year, index) => (
                              <Accordion.Item eventKey={`2-1-${index}`} key={year}>
                                <Accordion.Header>{year}</Accordion.Header>
                                <Accordion.Body>
                                  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                    <li>Corporate Finance</li>
                                    <li>Investment Analysis</li>
                                    <li>Financial Markets</li>
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                            ))}
                          </Accordion>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>

        {/* FOOTER starts here*/}
        <footer
          className="bg-dark text-light py-4"
          style={{ marginTop: "50px" }}
        >
          <Container
            className="text-center"
            style={{ fontSize: "18px", fontWeight: "bolder", color: "white" }}
          >
            <p>&copy; 2024 KIU Past Papers : PaperPal</p>
          </Container>
        </footer>
      </div>{" "}
    </Router>
  );
}

export default App;

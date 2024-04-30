import Button from "react-bootstrap/Button";
import { Col, Form, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setPassword, registerUser, selectEmail, selectPassword } from "../slices/userSlice";

function Register() {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const email = useSelector(selectEmail); // Selecting email from Redux state                 // Receiver
  const password = useSelector(selectPassword); // Selecting password from Redux state
  const dispatch = useDispatch(); // Hook for dispatching actions                             // Sender

  const handleEmail = (e) => {
    dispatch(setEmail(e.target.value)); // Dispatching setEmail action with the new email value
  };

  const handlePassword = (e) => {
    dispatch(setPassword(e.target.value)); // Dispatching setPassword action with the new password value
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser())
    emailInputRef.current.value = '';
    passwordInputRef.current.value = '';
  };

  return (
    <>
      <Card className="text-center container mt-5">
        <Card.Header>Registration Form</Card.Header>
        <Form className="mt-5">
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Email
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                value={email}
                ref={emailInputRef}
                onChange={handleEmail}
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Password
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                value={password}
                ref={passwordInputRef}
                onChange={handlePassword}
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button onClick={handleRegister}>Sign up</Button>
              <Button as={Link} to="/login" className="mx-2">
                Login
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Card>
    </>
  );
}

export default Register;

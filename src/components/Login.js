import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Col, Form, Row, Card }  from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setPassword, loginUser, selectEmail, selectPassword } from "../slices/userSlice";

function Login() {
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    dispatch(setEmail(e.target.value)); // Dispatching setEmail action with the new email value
  };

  const handlePassword = (e) => {
    dispatch(setPassword(e.target.value)); // Dispatching setPassword action with the new password value
  };

  const handleLogin = () => {
    dispatch(loginUser());
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/home');
    }
  };

  return (
		<>
		<Card className="text-center container mt-5">
      <Card.Header>Sign in</Card.Header>
      <Form className="mt-5">
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={5}>
            Email
          </Form.Label>
          <Col sm={5}>
            <Form.Control value={email} onChange={handleEmail} type="email" name="email" placeholder="Enter your email"/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={5}>
            Password
          </Form.Label>
          <Col sm={5}>
            <Form.Control value={password} onChange={handlePassword} type="password" name="password" placeholder="Enter your password" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button onClick={handleLogin}>
              Login
            </Button>
						<Button as={Link} to="/" className="mx-2">
              Sign up
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Card>
		</>
  );
}

export default Login;
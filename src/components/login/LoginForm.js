import React from "react";
import {
  Form,
  Row,
  Col,
  Button,
  Spinner,
  Alert,
  Card,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
export const LoginForm = () => {
  const history = useHistory();
  const handleOnChange = (e) => {};
  const handleOnSubmit = (e) => {
    e.preventDefault();
    history.push("/dashboard");
  };
  return (
    <div>
      <Card className="p-5 mt-5" style={{ width: "550px" }}>
        <h1>Login</h1>
        <hr />
        <Form onSubmit={handleOnSubmit} className="mb-3 justify-content-center">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              // required
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password *</Form.Label>
            <Form.Control
              type="password"
              name="password"
              // required
              placeholder="Password"
              onChange={handleOnChange}
            />
          </Form.Group>
          <InputGroup className="mb-3 d-flex justify-content-center">
            <InputGroup.Radio aria-label="Keep me signed in" />
            <InputGroup.Text id="basic-addon1">
              Keep me signed in.
            </InputGroup.Text>

            {/* <FormControl aria-label="Text input with radio button" /> */}
          </InputGroup>
          {/* <Form.Group className="mb-3 justify-content-center">
            <Form.Check type="checkbox" label="keep me logged in" />
          </Form.Group> */}
          <Button
            variant="primary"
            className="justify-content-center"
            type="submit"
          >
            Log In
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;

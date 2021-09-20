import React, { useState } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  Spinner,
  Alert,
  Card,
  InputGroup,
} from "react-bootstrap";

const initialState = {
  fname: "",
  lname: "",
  dob: "",
  email: "",
  password: "",
  phone: "",
  address: "",
  gender: "",
};
const AdminRegForm = () => {
  const [newUser, setNewUser] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target.value;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Card className="p-5 mt-5" style={{ width: "550px" }}>
        <h1>Registration page</h1>
        <hr />
        <Form>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              First Name
            </Form.Label>
            <Col sm="9">
              <Form.Control name="fname" placeholder="First name" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Last Name
            </Form.Label>
            <Col sm="9">
              <Form.Control name="lname" placeholder="Last name" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              DOB
            </Form.Label>
            <Col sm="9">
              <Form.Control name="dob" placeholder="dd/mm/yy" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Phone
            </Form.Label>
            <Col sm="9">
              <Form.Control name="phone" placeholder="0000000" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Address
            </Form.Label>
            <Col sm="9">
              <Form.Control type="address" placeholder="x st, y ave" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Email
            </Form.Label>
            <Col sm="9">
              <Form.Control name="email" placeholder="mail@me" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Password
            </Form.Label>
            <Col sm="9">
              <Form.Control name="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Confirm Password
            </Form.Label>
            <Col sm="9">
              <Form.Control name="password" placeholder="Confirm Password" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Gender
            </Form.Label>
            <Col sm="9">
              <InputGroup>
                <InputGroup.Radio name="gender" aria-label="Male" />
                <Form.Label>Male</Form.Label>

                <InputGroup.Radio name="gender" aria-label="Male" />
                <Form.Label>Female</Form.Label>
              </InputGroup>
            </Col>
          </Form.Group>

          <Button type="submit" variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default AdminRegForm;

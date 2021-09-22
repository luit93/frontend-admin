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

import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../pages/admin-user/userAction";
const initialState = {
  fname: "",
  lname: "",
  dob: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  address: "",
  gender: "",
};
export const AdminRegForm = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState(initialState);
  const [passError, setPassError] = useState("");
  const { isPending, userResp } = useSelector((state) => state.user);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (passError && name === "confirmPassword") {
      setPassError("");
    }
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { password } = newUser;
    const { confirmPassword, ...usserInfo } = newUser;
    if (password !== confirmPassword) {
      return setPassError("Passwords don't match");
    }

    dispatch(createUser(usserInfo));
    console.log(newUser, "todo, send this data to api");
  };

  return (
    <div>
      <Card className="p-5 mt-5">
        <h1>Registration page</h1>
        <hr />
        {isPending && <Spinner variant="primary" animation="border" />}
        {userResp?.message && (
          <Alert variant={userResp.status === "success" ? "success" : "danger"}>
            {userResp.message}
          </Alert>
        )}
        <Form onSubmit={handleOnSubmit}>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              First Name *
            </Form.Label>
            <Col sm="9">
              <Form.Control
                name="fname"
                placeholder="First name"
                required
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Last Name *
            </Form.Label>
            <Col sm="9">
              <Form.Control
                name="lname"
                placeholder="Last name"
                required
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              DOB
            </Form.Label>
            <Col sm="9">
              <Form.Control
                name="dob"
                placeholder="dd/mm/yy"
                type="date"
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Phone
            </Form.Label>
            <Col sm="9">
              <Form.Control
                name="phone"
                placeholder="0400000000"
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Address
            </Form.Label>
            <Col sm="9">
              <Form.Control
                name="address"
                placeholder="x st, y ave"
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Gender
            </Form.Label>
            <Col sm="9">
              <InputGroup>
                <InputGroup.Radio
                  name="gender"
                  aria-label="Male"
                  value="male"
                  onChange={handleOnChange}
                />
                <Form.Label>Male</Form.Label>

                <InputGroup.Radio
                  name="gender"
                  aria-label="Female"
                  value="female"
                  onChange={handleOnChange}
                />
                <Form.Label>Female</Form.Label>
              </InputGroup>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Email *
            </Form.Label>
            <Col sm="9">
              <Form.Control
                name="email"
                type="email"
                placeholder="mail@me"
                required
                onChange={handleOnChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Password *
            </Form.Label>
            <Col sm="9">
              <Form.Control
                name="password"
                placeholder="Password"
                type="password"
                minLength="6"
                required
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Confirm Password *
            </Form.Label>
            <Col sm="9">
              <Form.Control
                name="confirmPassword"
                placeholder="Confirm password"
                minLength="6"
                type="password"
                required
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>
          {passError && <Alert variant="danger"> {passError}</Alert>}

          <Button type="submit" variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default AdminRegForm;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserPasswordAction } from "../../pages/admin-user/userAction";
import {
  Row,
  Card,
  Form,
  Button,
  Col,
  Alert,
  ListGroup,
  Spinner,
} from "react-bootstrap";
const initialState = { currentPassword: "", password: "", confirmPassword: "" };
const initialError = {
  isMatched: false,
  hasNumber: false,
  hasUpper: false,
  hasLower: false,
  hasSymbol: false,
  isLenghty: false,
};
export const UpdateAdminPassword = () => {
  const dispatch = useDispatch();
  const { isPending, userResp } = useSelector((state) => state.user);
  const [userPassword, setUserPassword] = useState(initialState);
  const [passError, setPassError] = useState(initialError);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submitting new password", userPassword);
    const { password, currentPassword } = userPassword;

    dispatch(updateUserPasswordAction({ password, currentPassword }));
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const { password, confirmPassword } = userPassword;
    let isMatched = false;
    if (name === "password") {
      isMatched = confirmPassword === value;
      setPassError({
        ...passError,
        isMatched,
      });
    }
    if (name === "confirmPassword") {
      isMatched = password === value;
      const hasNumber = /[0-9]/.test(value);
      const hasUpper = /[A-Z]/.test(value);
      const hasLower = /[a-z]/.test(value);
      const hasSymbol = /[% ,^ ,! ,@, #, $,/]/.test(value);
      const isLenghty = value.length > 6;

      setPassError({
        ...passError,
        isMatched,
        isLenghty,
        hasSymbol,
        hasUpper,
        hasLower,
        hasNumber,
      });
    }

    setUserPassword({
      ...userPassword,
      [name]: value,
    });
  };

  return (
    <div>
      {isPending && <Spinner variant="primary" animation="border" />}
      {userResp?.message && (
        <Alert variant={userResp?.status === "success" ? "success" : "danger"}>
          {userResp?.message}
        </Alert>
      )}
      <Card className="p-5 mt-5">
        {/* {isPending && <Spinner variant="primary" animation="border" />}
        {userResp?.message && (
          <Alert variant={userResp.status === "success" ? "success" : "danger"}>
            {userResp.message}
          </Alert>
        )} */}
        <Form onSubmit={handleOnSubmit}>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              <h6>Current password *</h6>
            </Form.Label>
            <Col sm="9">
              <Form.Control
                name="currentPassword"
                placeholder="Password"
                type="password"
                value={userPassword.currentPassword}
                minLength="6"
                required
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              <h6>New password *</h6>
            </Form.Label>
            <Col sm="9">
              <Form.Control
                name="password"
                placeholder="new Password"
                type="password"
                value={userPassword.password}
                minLength="6"
                required
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              <h6>Confirm password *</h6>
            </Form.Label>
            <Col sm="9">
              <Form.Control
                name="confirmPassword"
                placeholder="confirmPassword"
                type="password"
                value={userPassword.confirmPassword}
                minLength="6"
                required
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              <h6>Password must follow the following validation rules</h6>
            </Form.Label>
            <Col sm="9">
              <ListGroup>
                <ListGroup.Item
                  variant={passError.isMatched ? "success" : "danger"}
                >
                  password doesn't match
                </ListGroup.Item>
                <ListGroup.Item
                  variant={passError.isLenghty ? "success" : "danger"}
                >
                  At least 6 chars
                </ListGroup.Item>
                <ListGroup.Item
                  variant={passError.hasUpper ? "success" : "danger"}
                >
                  Atleast 1 uppercase
                </ListGroup.Item>
                <ListGroup.Item
                  variant={passError.hasLower ? "success" : "danger"}
                >
                  Atleast 1 lowercase
                </ListGroup.Item>
                <ListGroup.Item
                  variant={passError.hasNumber ? "success" : "danger"}
                >
                  {" "}
                  Atleast 1 number
                </ListGroup.Item>
                <ListGroup.Item
                  variant={passError.hasSymbol ? "success" : "danger"}
                >
                  Atleast 1 of the following: % ^ ! @ # $
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Form.Group>

          <Button
            type="submit"
            variant="warning"
            size="lg"
            disabled={Object.values(passError).includes(false)}
          >
            Update Password
          </Button>
        </Form>
      </Card>
    </div>
  );
};

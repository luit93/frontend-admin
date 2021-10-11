import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Card,
  InputGroup,
  Alert,
  Spinner,
  ListGroup,
  Row,
  Col,
} from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordAction } from "../../pages/admin-user/userAction";
const initialState = { otp: undefined, password: "", confirmPassword: "" };
const initialError = {
  isMatched: false,
  hasNumber: false,
  hasUpper: false,
  hasLower: false,
  hasSymbol: false,
  isLenghty: false,
};
export const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [userPassword, setUserPassword] = useState(initialState);
  const [passError, setPassError] = useState(initialError);
  const { isPending, userResp, passResetEmail } = useSelector(
    (state) => state.user
  );

  const [loginInfo, setLoginInfo] = useState(initialState);

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
      const hasSymbol = /[% ,^ ,! ,@, #, $,/,*]/.test(value);
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
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { otp, password } = userPassword;
    const obj = { otp, email: passResetEmail, password };
    dispatch(resetPasswordAction(obj));
  };
  return (
    <div>
      <Card className="p-5 mt-5" style={{ width: "550px" }}>
        <h1>Reset password</h1>
        {isPending && <Spinner variant="primary" animation="border" />}
        {userResp?.message && (
          <Alert variant={userResp.status === "success" ? "success" : "danger"}>
            {userResp.message}
          </Alert>
        )}
        <hr />
        <Form onSubmit={handleOnSubmit} className="mb-3 justify-content-center">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={passResetEmail}
              required
              disabled
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>OTP</Form.Label>
            <Form.Control
              type="number"
              name="otp"
              value={loginInfo.email}
              required
              placeholder="3242342"
              onChange={handleOnChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>New password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              required
              placeholder="******"
              onChange={handleOnChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password *</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              required
              placeholder="*****"
              onChange={handleOnChange}
            />
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
                  Atleast 1 of the following: % ^ ! @ # $ *
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Form.Group>
          <Button
            variant="primary"
            className="justify-content-center"
            type="submit"
            disabled={Object.values(passError).includes(false)}
          >
            Update Password
          </Button>
        </Form>
        <a className="mt-2 text-end" href="/">
          Login
        </a>
      </Card>
    </div>
  );
};

export default ResetPasswordForm;

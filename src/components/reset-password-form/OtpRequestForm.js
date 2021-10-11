import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Card,
  InputGroup,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  adminLogin,
  autoLoginAction,
  requestOTPAction,
} from "../../pages/admin-user/userAction";

export const OtpRequestForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { isPending, userResp, isLoggedIn } = useSelector(
    (state) => state.user
  );
  const from = location?.state?.from?.pathname || "/dashboard";

  const [email, setEmail] = useState("initialState");

  // useEffect(() => {
  //   !isLoggedIn && dispatch(autoLoginAction());
  //   isLoggedIn && history.replace(from);
  // }, [isLoggedIn, history, from]);
  const handleOnChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    email && dispatch(requestOTPAction(email));
  };
  return (
    <div>
      <Card className="p-5 mt-5" style={{ width: "550px" }}>
        <h1>Request OTP</h1>
        {isPending && <Spinner variant="primary" animation="border" />}
        {userResp?.message && (
          <Alert variant={userResp.status === "success" ? "success" : "danger"}>
            {userResp.message}
          </Alert>
        )}
        <hr />
        <Form onSubmit={handleOnSubmit} className="mb-3 justify-content-center">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              required
              placeholder="Enter email"
              onChange={handleOnChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Button
            variant="primary"
            className="justify-content-center"
            type="submit"
          >
            Request OTP
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default OtpRequestForm;

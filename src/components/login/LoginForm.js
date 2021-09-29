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
import { adminLogin } from "../../pages/admin-user/userAction";
const initialState = {
  email: "bon4g@aa.com",
  password: "3hhss3",
};
export const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { isPending, userResp, isLoggedIn } = useSelector(
    (state) => state.user
  );
  const from = location?.state?.from?.pathname || "/dashboard";

  const [loginInfo, setLoginInfo] = useState(initialState);

  useEffect(() => {
    isLoggedIn && history.replace(from);
  }, [isLoggedIn, history, from]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!loginInfo.email || !loginInfo.password) {
      return alert("Please input both email & password");
    }
    dispatch(adminLogin(loginInfo));
    history.replace(from);
  };
  return (
    <div>
      <Card className="p-5 mt-5" style={{ width: "550px" }}>
        <h1>Admin Login</h1>
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
              value={loginInfo.email}
              required
              placeholder="Enter email"
              onChange={handleOnChange}
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
              value={loginInfo.password}
              required
              placeholder="Password"
              onChange={handleOnChange}
            />
          </Form.Group>
          <InputGroup className="mb-3 d-flex justify-content-center">
            <InputGroup.Checkbox aria-label="Keep me signed in" />
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

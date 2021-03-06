import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfileAction } from "../../pages/admin-user/userAction";
import {
  Row,
  Card,
  Form,
  Button,
  Col,
  Alert,
  InputGroup,
  Spinner,
} from "react-bootstrap";

const EditAdminProfile = () => {
  const dispatch = useDispatch();
  const { isPending, userResp, user } = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState(user);
  useEffect(() => {
    setUserInfo(user);
  }, [user]);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, dob, phone, address, gender } = userInfo;
    const obj = { fname, lname, dob, phone, address, gender };
    dispatch(updateUserProfileAction(obj));
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
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
              First Name *
            </Form.Label>
            <Col sm="9">
              <Form.Control
                name="fname"
                value={userInfo.fname}
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
                value={userInfo.lname}
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
                value={userInfo.dob ? userInfo.dob.substr(0, 10) : undefined}
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
                value={userInfo.phone}
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
                value={userInfo.address}
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
                  checked={userInfo.gender === "male"}
                  onChange={handleOnChange}
                />
                <Form.Label>Male</Form.Label>

                <InputGroup.Radio
                  name="gender"
                  aria-label="Female"
                  value="female"
                  checked={userInfo.gender === "female"}
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
                value={userInfo.email}
                required
                // onChange={handleOnChange}
                disabled
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Col>
          </Form.Group>

          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default EditAdminProfile;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Col,
  Form,
  Row,
  Button,
  FloatingLabel,
  Spinner,
  Alert,
} from "react-bootstrap";
// import { addNewCat } from "../../pages/category/categoryAction";

const initialState = {
  status: false,
  name: "",
  info: "",
};

export const AddPaymentOptionForm = () => {
  const dispatch = useDispatch();
  const { isPending, paymentOptResp } = useSelector(
    (state) => state.paymentOption
  );
  const [payment, setPayment] = useState(initialState);
  const handleOnChange = (e) => {
    const { checked, name, value } = e.target;
    setPayment({
      ...payment,
      [name]: name === "status" ? checked : value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {/* {isPending && <Spinner variant="primary" animation="border" />}
			{categoryResp.message && (
				<Alert
					variant={categoryResp.status === "success" ? "success" : "danger"}
				>
					{categoryResp.message}
				</Alert>
			)} */}

      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col md={2} className="mt-2">
            <Form.Check
              name="status"
              onChange={handleOnChange}
              label="Status"
              required
            />
          </Col>
          <Col md={2} className="mt-2">
            <Form.Control
              name="name"
              onChange={handleOnChange}
              placeholder="payment name"
              aria-label="payment name"
              required
            />
          </Col>
          <Col md={6} className="mt-2">
            <Form.Control
              name="info"
              placeholder="Description"
              onChange={handleOnChange}
              aria-label="Description"
              required
            />
          </Col>
          <Col className="mt-2">
            <Button type="submit" size="lg">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const FormGroup = ({ label, ...rest }) => {
  return (
    <div>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          {label}
        </Form.Label>
        <Col sm="9">
          <Form.Control {...rest} />
        </Col>
      </Form.Group>
    </div>
  );
};

export default FormGroup;

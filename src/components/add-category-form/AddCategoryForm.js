import React from "react";
import { Form, Row, Col, Button, FloatingLabel } from "react-bootstrap";
const AddCategoryForm = () => {
  const categories = [
    { _id: 1, name: "Grocery", parentCat: "" },
    { _id: 2, name: "Dairy", parentCat: "1" },
    { _id: 3, name: "Bakery", parentCat: "1" },
    { _id: 4, name: "Electronics", parentCat: "" },
    { _id: 5, name: "Laptop", parentCat: "3" },
    { _id: 6, name: "Mobile", parentCat: "3" },
    { _id: 7, name: "Furniture", parentCat: "" },
  ];

  const handleOnChange = (e) => {};

  //parent cats only
  const parentCatOnly = categories.filter((row) => !row.parentCat);

  //child cats only
  const childCat = categories.filter((row) => row.parentCat);

  return (
    <div>
      <Form>
        <Row>
          <Col md={5}>
            <FloatingLabel
              controlId="floatingSelect"
              label="Works with selects"
            >
              <Form.Control
                name="name"
                placeholder="Category name"
                onChange={handleOnChange}
                required
              />
            </FloatingLabel>
          </Col>
          <Col md={5}>
            <FloatingLabel
              controlId="floatingSelect"
              label="Select parent category"
            >
              <Form.Select aria-label="Floating label select example">
                <option>Select main category</option>
                {parentCatOnly.map((row, i) => (
                  <option key={row._id} value={row._id}>
                    {row.name}
                  </option>
                ))}
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <Button type="submit">Add</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddCategoryForm;

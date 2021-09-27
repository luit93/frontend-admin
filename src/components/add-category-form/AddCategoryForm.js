import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  Form,
  Row,
  Col,
  Button,
  FloatingLabel,
  Spinner,
} from "react-bootstrap";
import { addNewCat } from "../../pages/categories/categoryAction";
const initialState = {
  name: "",
  parentCat: "",
};
const AddCategoryForm = () => {
  const dispatch = useDispatch();
  const { isPending, catList, categoryResponse } = useSelector(
    (state) => state.category
  );
  const [newCat, setNewCat] = useState(initialState);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewCat({
      ...newCat,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewCat(newCat));
  };
  //parent cats only
  const parentCatOnly = catList.filter((row) => !row.parentCat);

  //child cats only
  // const childCat = categories.filter((row) => row.parentCat);

  return (
    <div>
      {isPending && <Spinner variant="primary" animation="border" />}
      {categoryResponse.message && (
        <Alert
          variant={categoryResponse.status === "success" ? "success" : "danger"}
        >
          {categoryResponse.message}
        </Alert>
      )}
      <Form onSubmit={handleOnSubmit}>
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
              <Form.Select
                onChange={handleOnChange}
                name="parentCat"
                aria-label="Floating label select example"
              >
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

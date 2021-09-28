import React, { useState, useEffect } from "react";
import { CustomModal } from "../custom-modal/CustomModal.js";
import { useSelector, useDispatch } from "react-redux";
import { onDeSelectCategory } from "../../pages/categories/categorySlice";
import {
  Alert,
  Form,
  Row,
  Col,
  Button,
  FloatingLabel,
  Spinner,
} from "react-bootstrap";
import { categoryUpdate } from "../../pages/categories/categoryAction";
const initialState = {
  name: "",
  parentCat: "",
};
const EditCategoryForm = () => {
  const dispatch = useDispatch();
  const { isPending, catList, selectedCat, categoryResponse } = useSelector(
    (state) => state.category
  );
  const [updateCat, setUpdateCat] = useState({});

  useEffect(() => {
    setUpdateCat(selectedCat);
  }, [selectedCat]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUpdateCat({
      ...updateCat,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { _id, name, parentCat } = updateCat;
    if (name !== selectedCat.name || parentCat !== selectedCat.parentCat) {
      console.log(updateCat);
      dispatch(categoryUpdate({ _id, name, parentCat }));
      return;
    }
    alert("Nothing to update");
  };
  //parent cats only
  const parentCatOnly = catList.filter((row) => !row.parentCat);

  return (
    <CustomModal
      show={selectedCat._id}
      onHide={() => dispatch(onDeSelectCategory())}
      title="Edit Category"
    >
      <div>
        {isPending && <Spinner variant="primary" animation="border" />}
        {categoryResponse.message && (
          <Alert
            variant={
              categoryResponse.status === "success" ? "success" : "danger"
            }
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
                  value={updateCat.name}
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
                  <option value="">Select main category</option>
                  {parentCatOnly.map((row, i) => (
                    <option
                      key={row._id}
                      value={row._id}
                      selected={row._id === updateCat.parentCat}
                    >
                      {row.name}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col>
              <Button type="submit">Update Category</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </CustomModal>
  );
};

export default EditCategoryForm;

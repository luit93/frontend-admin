import React, { useState } from "react";
import { Col, Form, Row, Button, Alert, Spinner } from "react-bootstrap";
import FormGroup from "../form-group/FormGroup";
import { useSelector, useDispatch } from "react-redux";
import { addProductAction } from "../../pages/products/productAction";
import ProductCatList from "../category-list/ProductCatList";
const initialState = {
  status: true,
  title: "apple ipad",
  price: 500,
  qty: 50,
  description: "Awesome tab",
  categories: "electronics",
  salePrice: 0,
  saleStartDate: "",
  saleEndDate: "",
  brand: "apple",
};
const inputFields = [
  { label: "Title", name: "title", placeholder: "name", required: true },

  {
    label: "Price",
    name: "price",
    type: "numer",
    placeholder: "20",
    required: true,
  },
  {
    label: "Qty",
    name: "qty",
    placeholder: "20",
    type: "number",
    required: true,
  },
  { label: "Sale price", name: "salePrice", placeholder: "20", type: "number" },
  {
    label: "sale start date",
    name: "saleStartDate",
    placeholder: "20",
    type: "date",
  },
  {
    label: "sale end date",
    name: "saleEndDate",
    placeholder: "20",
    type: "date",
  },
  { label: "Description", name: "description", as: "textarea", rows: 5 },
  { label: "Brand", name: "brand", placeholder: "brand name" },
];
const AddProductForm = () => {
  const dispatch = useDispatch();
  const { isPending, productResp } = useSelector((state) => state.product);
  const [product, setProduct] = useState(initialState);
  const [prodCategory, setProdCategory] = useState([]);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addProductAction({ ...product, categories: prodCategory }));
    console.log("submittin ...", product);
  };

  const handleOnChange = (e) => {
    const { checked, name, value } = e.target;
    if (name === "status") {
      return setProduct({
        ...product,
        status: checked,
      });
    }
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleOnCatSelect = (e) => {
    const { checked, value } = e.target;
    console.log(checked, value);
    if (checked) {
      setProdCategory([...prodCategory, value]);
    } else {
      const arg = prodCategory.filter((id) => id !== value);
      setProdCategory(arg);
    }
  };
  return (
    <div className="">
      <Form className="p-3" onSubmit={handleOnSubmit}>
        {isPending && <Spinner variant="info" animation="border" />}
        {productResp?.message && (
          <Alert
            variant={productResp.status === "success" ? "success" : "danger"}
          >
            {productResp.message}
          </Alert>
        )}
        <Form.Group as={Row} className="mb-4">
          <Form.Check
            type="switch"
            name="status"
            id="custom-switch"
            label="Status"
            onChange={handleOnChange}
          />
        </Form.Group>
        {inputFields.map((row, i) => (
          <FormGroup {...row} onChange={handleOnChange} />
        ))}
        <Form.Group as={Row} className="mb-4">
          <Form.Label column sm="3">
            Categories
          </Form.Label>
          <Col sm="9">
            <ProductCatList
              handleOnCatSelect={handleOnCatSelect}
              prodCategory={prodCategory}
            />
          </Col>
        </Form.Group>
        <Button variant="success" type="submit">
          Add new product
        </Button>
      </Form>
    </div>
  );
};

export default AddProductForm;

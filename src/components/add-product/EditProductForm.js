import React, { useState, useEffect } from "react";
import { Col, Form, Row, Button, Alert, Spinner } from "react-bootstrap";
import FormGroup from "../form-group/FormGroup";
import { useSelector, useDispatch } from "react-redux";
import ProductCatList from "../category-list/ProductCatList";

import {
  addProductAction,
  getSingleProductAction,
  updateProductAction,
} from "../../pages/products/productAction";
import { useParams } from "react-router-dom";
const initialState = {
  status: false,
  title: "",
  price: 0,
  qty: 0,
  description: "",
  categories: "",
  salePrice: 0,
  saleStartDate: "",
  saleEndDate: "",
  brand: "",
};

const EditProductForm = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [prodCategory, setProdCategory] = useState([]);
  const [imgToDelete, setImgToDelete] = useState([]);
  const [newImages, setNewImages] = useState([]);

  const { isPending, productResp, selectedProduct } = useSelector(
    (state) => state.product
  );
  const [updateProduct, setUpdateProduct] = useState(initialState);
  useEffect(() => {
    if (!selectedProduct._id || slug !== selectedProduct.slug) {
      dispatch(getSingleProductAction(slug));
    }

    setUpdateProduct(selectedProduct);
    selectedProduct?.categories && setProdCategory(selectedProduct.categories);
  }, [dispatch, slug, selectedProduct]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { __v, slug, images, ...toUpdate } = updateProduct;
    toUpdate.oldImages = images;
    toUpdate.categories = prodCategory;
    toUpdate.imgToDelete = imgToDelete;
    const frmDt = new FormData();
    for (const key in toUpdate) {
      if (key === "saleStartDate" || key === "saleEndDate") {
        frmDt.append(key, toUpdate[key] ? toUpdate[key] : "");
        continue;
      }
      frmDt.append(key, toUpdate[key]);
    }

    //append images
    newImages.length &&
      [...newImages].map((img) => frmDt.append("images", img));
    // console.log(images, typeof images, "----");
    dispatch(updateProductAction(slug, frmDt));

    window.scrollTo(0, 0);

    // console.log("submittin ...", product);
  };

  const handleOnChange = (e) => {
    const { checked, name, value, files } = e.target;
    if (files) {
      console.log(files);
      return setNewImages(files);
    }
    if (name === "status") {
      return setUpdateProduct({
        ...updateProduct,
        status: checked,
      });
    }
    setUpdateProduct({
      ...updateProduct,
      [name]: value,
    });
  };
  const handleOnDelete = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setImgToDelete([...imgToDelete, value]);
    } else {
      const obj = imgToDelete.filter((src) => src !== value);
      setImgToDelete(obj);
    }
  };
  console.log(updateProduct);
  console.log(imgToDelete);

  const inputFields = [
    {
      label: "Title",
      name: "title",
      placeholder: "name",
      required: true,
      value: updateProduct.title,
    },

    {
      label: "Price",
      name: "price",
      type: "number",
      placeholder: "20",
      required: true,
      value: updateProduct.price,
    },
    {
      label: "Qty",
      name: "qty",
      placeholder: "20",
      type: "number",
      required: true,
      value: updateProduct.qty,
    },
    {
      label: "Sale price",
      name: "salePrice",
      placeholder: "20",
      type: "number",
      value: updateProduct.salePrice,
    },
    {
      label: "sale start date",
      name: "saleStartDate",
      placeholder: "20",
      type: "date",
      value: updateProduct.saleStartDate
        ? updateProduct.saleStartDate.substr(0, 10)
        : null,
    },
    {
      label: "sale end date",
      name: "saleEndDate",
      placeholder: "20",
      type: "date",

      value: updateProduct.saleEndDate
        ? updateProduct.saleEndDate.substr(0, 10)
        : null,
    },
    {
      label: "Description",
      name: "description",
      as: "textarea",
      rows: 5,
      value: updateProduct.description,
    },
    {
      label: "Brand",
      name: "brand",
      placeholder: "brand name",
      value: updateProduct.brand,
    },
    {
      label: "Select Images",
      name: "images",
      type: "file",
      multiple: true,
      accept: "image/*",
    },
  ];
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
            checked={updateProduct.status}
            onChange={handleOnChange}
          />
        </Form.Group>
        {inputFields.map((row, i) => (
          <FormGroup {...row} onChange={handleOnChange} />
        ))}
        <Form.Group as={Row} className="mb-4">
          <div className="d-flex flex-wrap justify-content-between">
            {updateProduct.images?.map((imgSrc, i) => (
              <div className="d-flex flex-column">
                <img
                  src={imgSrc}
                  alt="prod images"
                  height="60px"
                  width="80px"
                  key={i}
                />
                <Form.Check
                  label="Delete"
                  defaultValue={imgSrc}
                  onChange={handleOnDelete}
                  checked={imgToDelete.includes(imgSrc)}
                />
              </div>
            ))}
          </div>
        </Form.Group>
        <Form.Group as={Row} className="mb-4">
          <Form.Label>Categories</Form.Label>
          <Col sm="9">
            <ProductCatList
              handleOnCatSelect={handleOnCatSelect}
              prodCategory={prodCategory}
            />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          update product
        </Button>
      </Form>
    </div>
  );
};

export default EditProductForm;

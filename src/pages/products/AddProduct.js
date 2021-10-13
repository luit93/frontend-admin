import React from "react";
import AdminLayout from "../layout/AdminLayout";
import AddProductForm from "../../components/add-product/AddProductForm";
const AddProduct = () => {
  return (
    <AdminLayout>
      <div>
        <h1>Add a new product</h1>
        <br />
        <AddProductForm />
      </div>
    </AdminLayout>
  );
};

export default AddProduct;

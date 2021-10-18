import React from "react";
import AdminLayout from "../layout/AdminLayout";
import EditProductForm from "../../components/add-product/EditProductForm";
const EditProduct = () => {
  return (
    <AdminLayout>
      <div>
        <h1>Edit new product</h1>
        <br />
        <EditProductForm />
      </div>
    </AdminLayout>
  );
};

export default EditProduct;

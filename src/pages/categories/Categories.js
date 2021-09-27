import React from "react";
import AdminLayout from "../layout/AdminLayout";
import AddCategoryForm from "../../components/add-category-form/AddCategoryForm";
import { CategoryList } from "../../components/category-list/CategoryList";
const Categories = () => {
  return (
    <AdminLayout>
      <div>
        <h1>Categories</h1>
        <div className="add-cat-form">
          <AddCategoryForm />
        </div>
        <hr />

        <div className="cat-list">
          <h2>Category list</h2>
          <CategoryList />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Categories;

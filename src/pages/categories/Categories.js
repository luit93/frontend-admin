import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import AdminLayout from "../layout/AdminLayout";
import AddCategoryForm from "../../components/add-category-form/AddCategoryForm";
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
          <ListGroup>
            <ListGroup.Item className="d-flex justify-content-between">
              <span>Category Name</span>
              <span>
                <Button variant="primary">Edit</Button>
                <Button variant="danger" style={{ marginleft: "1rem" }}>
                  Delete
                </Button>
              </span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <span> => Sub category Name</span>
              <span>
                <Button variant="primary">Edit</Button>
                <Button variant="danger" style={{ marginleft: "1rem" }}>
                  Delete
                </Button>
              </span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <span>Category Name2</span>
              <span>
                <Button variant="primary">Edit</Button>
                <Button variant="danger" style={{ marginleft: "1rem" }}>
                  Delete
                </Button>
              </span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <span> => Sub category Name2</span>
              <span>
                <Button variant="primary">Edit</Button>
                <Button variant="danger" style={{ marginleft: "1rem" }}>
                  Delete
                </Button>
              </span>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Categories;

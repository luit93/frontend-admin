import React from "react";
import AdminLayout from "../layout/AdminLayout";
import { Button } from "react-bootstrap";
import ListTable from "../../components/tables/ListTable";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <AdminLayout>
      <div>
        <h1>Products</h1>
        <hr />
        <div className="text-end">
          <Link to="/products/new">
            <Button variant="info" className="text-end">
              <i class="fas fa-plus"></i> Add new Product
            </Button>
          </Link>
        </div>
        <hr />
        <div className="product-list">
          list of products <ListTable />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Products;

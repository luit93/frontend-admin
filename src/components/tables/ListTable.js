import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import {
  getProductAction,
  deleteProductAction,
  getSingleProductAction,
} from "../../pages/products/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
const ListTable = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProductAction());
  }, []);
  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProductAction(_id));
    }
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {productList?.length ? (
            productList.map((row, i) => (
              <tr key={row._id}>
                <td>{i + 1}</td>
                <td>{row.status === true ? "Online" : "Offline"}</td>
                <td>{row.title}</td>
                <td>{row.price}</td>
                <td>{row.qty}</td>
                <td>
                  <Link to={`/products/${row.slug}`}>
                    <Button variant="info">Edit</Button>
                  </Link>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleOnDelete(row._id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No products ot show
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ListTable;

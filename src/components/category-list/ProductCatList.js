import React, { useEffect } from "react";
import { ListGroup, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../pages/categories/categoryAction";

export const ProductCatList = ({ handleOnCatSelect, prodCategory }) => {
  const dispatch = useDispatch();
  const { catList } = useSelector((state) => state.category);
  useEffect(() => {
    !catList.length && dispatch(getCategories());
  }, [dispatch]);

  return (
    <div
      className="product-cat-list"
      style={{ height: "250px", overflowY: "scroll" }}
    >
      <ListGroup>
        {catList?.map((row) => (
          <ListGroup.Item key={row._id}>
            <Form.Check
              name="category"
              label={row.name}
              defaultValue={row._id}
              checked={prodCategory.includes(row._id)}
              onChange={handleOnCatSelect}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ProductCatList;

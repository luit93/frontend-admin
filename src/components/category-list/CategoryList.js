import React from "react";
import { ListGroup, Button, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
export const CategoryList = () => {
  const { isPending, catList } = useSelector((state) => state.category);
  return (
    <div>
      <ListGroup>
        {catList?.length &&
          catList.map((row) => {
            return (
              <ListGroup.Item
                key={row._id}
                className="d-flex justify-content-between"
              >
                <span>{row.name}</span>
                <span>
                  <Button variant="primary">Edit</Button>
                  <Button variant="danger" style={{ marginleft: "1rem" }}>
                    Delete
                  </Button>
                </span>
              </ListGroup.Item>
            );
          })}

        <ListGroup.Item className="d-flex justify-content-between">
          <span> => Sub category Name</span>
          <span>
            <Button variant="primary">Edit</Button>
            <Button variant="danger" style={{ marginleft: "1rem" }}>
              Delete
            </Button>
          </span>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

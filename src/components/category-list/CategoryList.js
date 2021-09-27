import React from "react";
import { ListGroup, Button } from "react-bootstrap";

export const CategoryList = () => {
  return (
    <div>
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
  );
};

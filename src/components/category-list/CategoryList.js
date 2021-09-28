import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { categoryDelete } from "../../pages/categories/categoryAction";
import { onCategorySelect } from "../../pages/categories/categorySlice";
import EditCategoryForm from "../edit-category-form/EditCategoryForm";

export const CategoryList = () => {
  const dispatch = useDispatch();
  const { isPending, catList } = useSelector((state) => state.category);
  //parent cats only
  const parentCatOnly = catList.filter((row) => !row.parentCat);
  //child cats only
  const childCat = catList.filter((row) => row.parentCat);
  const handleOnDelete = (_id) => {
    //make sure we're not deleting any parentCat that has a childCat
    const hasChildCat = childCat.some((item) => item.parentCat === _id);
    if (hasChildCat) {
      return alert(
        "This category has some child category. Remove them or reassign to another category before deleting."
      );
    }
    //confirmation
    if (window.confirm("Are you sure you wanna delete this category?")) {
      //call api to delete the item
      dispatch(categoryDelete(_id));
    }
  };
  console.log(parentCatOnly, childCat);
  return (
    <div>
      <EditCategoryForm />
      <ListGroup>
        {parentCatOnly?.length &&
          parentCatOnly.map((row) => {
            return (
              <div key={row._id}>
                <ListGroup.Item className="d-flex justify-content-between">
                  <span>{row.name}</span>
                  <span>
                    <Button
                      variant="primary"
                      onClick={() => dispatch(onCategorySelect(row))}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      style={{ marginleft: "1rem" }}
                      onClick={() => handleOnDelete(row._id)}
                    >
                      Delete
                    </Button>
                  </span>
                </ListGroup.Item>

                {childCat?.length &&
                  childCat.map(
                    (item) =>
                      item.parentCat === row._id && (
                        <ListGroup.Item className="d-flex justify-content-between">
                          <span> =&gt; {item.name}</span>
                          <span>
                            <Button
                              variant="primary"
                              onClick={() => dispatch(onCategorySelect(item))}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="danger"
                              style={{ marginleft: "1rem" }}
                              onClick={() => handleOnDelete(item._id)}
                            >
                              Delete
                            </Button>
                          </span>
                        </ListGroup.Item>
                      )
                  )}
              </div>
            );
          })}
      </ListGroup>
    </div>
  );
};

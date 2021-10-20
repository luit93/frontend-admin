import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getPaymentOptions } from "../../pages/payments/paymentOptionAction";

export const PaymentOptionTable = () => {
  const dispatch = useDispatch();
  const { payOptList } = useSelector((state) => state.paymentOption);

  useEffect(() => {
    dispatch(getPaymentOptions());
  }, [dispatch]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Status</th>
          <th>Name</th>
          <th>Info</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {payOptList?.length &&
          payOptList.map((row, i) => (
            <tr key={row._id}>
              <td>{i + 1}</td>
              <td>{row.status ? "Online" : "Offline"} </td>
              <td>{row.name}</td>
              <td>{row.info}</td>
              <td>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

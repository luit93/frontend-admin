import React from "react";
import AdminLayout from "../layout/AdminLayout";
import { PaymentOptionTable } from "../../components/payment-table/PaymentOptionsTable";
import { AddPaymentOptionForm } from "../../components/add-payment-option-form/AddPaymentOptionForm";
const Payments = () => {
  return (
    <AdminLayout>
      <div>
        <h1>Payment options</h1>
        <AddPaymentOptionForm />
        <hr />
        <PaymentOptionTable />
        <hr />
      </div>
    </AdminLayout>
  );
};

export default Payments;

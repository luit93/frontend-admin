import React, { useEffect } from "react";
import { Spinner, Alert } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { verifyEmail } from "../admin-user/userAction";

const EmailVerification = () => {
  const dispatch = useDispatch();
  const queries = new URLSearchParams(useLocation().search);
  const { isPending, emailVerificationResponse } = useSelector(
    (state) => state.user
  );
  const otp = queries.get("otp");
  const email = queries.get("email");
  useEffect(() => {
    //call acting to call api
    dispatch(verifyEmail({ otp, email }));
  }, [dispatch, otp, email]);

  return (
    <div className="mt-5 text-center">
      {" "}
      <h1>Validating email....</h1>
      {isPending && <Spinner variant="primary" animation="border" />}
      {emailVerificationResponse.message && (
        <Alert
          variant={
            emailVerificationResponse.status === "success"
              ? "success"
              : "danger"
          }
        >
          {emailVerificationResponse.message}
        </Alert>
      )}
    </div>
  );
};

export default EmailVerification;

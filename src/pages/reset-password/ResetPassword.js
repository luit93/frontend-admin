import React from "react";
import LoginForm from "../../components/login/LoginForm";
import OtpRequestForm from "../../components/reset-password-form/OtpRequestForm";
import { ResetPasswordForm } from "../../components/reset-password-form/ResetPasswordForm";
import { useSelector } from "react-redux";
const ResetPassword = () => {
  const { showResetPassForm } = useSelector((state) => state.user);
  return (
    <div className="d-flex justify-content-center mt-5">
      {showResetPassForm ? <ResetPasswordForm /> : <OtpRequestForm />}
    </div>
  );
};

export default ResetPassword;

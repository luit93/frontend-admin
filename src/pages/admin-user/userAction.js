import {
  registrationSuccess,
  resPending,
  resFail,
  emailVerificationSuccess,
} from "./userSlice";
import { createNewUser, verifyNewUserEmail } from "../../apis/userApi";
export const createUser = (userInfo) => async (dispatch) => {
  dispatch(resPending());
  //call api function
  const result = await createNewUser(userInfo);

  result.status === "success"
    ? dispatch(registrationSuccess(result))
    : dispatch(resFail(result));
};
export const verifyEmail = (userInfo) => async (dispatch) => {
  dispatch(resPending());
  //call api function
  const result = await verifyNewUserEmail(userInfo);
  dispatch(emailVerificationSuccess(result));
};

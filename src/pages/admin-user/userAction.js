import { registrationSuccess, resPending, resFail } from "./userSlice";
import { createNewUser } from "../../apis/userApi";
export const createUser = (userInfo) => async (dispatch) => {
  dispatch(resPending);
  //call api function
  const result = await createNewUser(userInfo);

  result.status === "success"
    ? dispatch(registrationSuccess(result))
    : dispatch(resFail(result));
};

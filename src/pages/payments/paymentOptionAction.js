import {
  fetchPayOptions,
  newPaymentOPtion,
  deletePaymentOPtion,
} from "../../apis/paymentOptionApi";
import {
  resPending,
  addPayOptSuccess,
  deletePayOptSuccess,
  getPayOptSuccess,
  resFail,
} from "./paymentOptionSlice";
import { newAccessJWT } from "../../apis/tokenApi";
import { userLogOut } from "../admin-user/userAction";

export const getPaymentOptions = () => async (dispatch) => {
  dispatch(resPending());

  const data = await fetchPayOptions();

  //=== re auth
  if (data.message === "jwt expired") {
    const token = await newAccessJWT();

    if (token) {
      dispatch(getPaymentOptions());
    } else {
      dispatch(userLogOut());
    }
  }
  //====== re auth

  data.status === "success"
    ? dispatch(getPayOptSuccess(data.result))
    : dispatch(resFail(data));
};

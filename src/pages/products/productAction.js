import {
  resPending,
  resFail,
  getProducts,
  getSingleProduct,
  deleteProdSuccess,
  addProdSuccess,
} from "./productSlice";
import {
  fetchProducts,
  deleteProduct,
  addProduct,
} from "../../apis/productApi";
import { newAccessJWT } from "../../apis/tokenApi";
import { userLogOut } from "../admin-user/userAction";

export const getProductAction = () => async (dispatch) => {
  dispatch(resPending());
  const data = await fetchProducts();
  if (data.message === "jwt expired") {
    const token = await newAccessJWT();
    console.log("time to request new jwt");
    //re auth
    if (token) {
      dispatch(getProductAction());
    } else {
      dispatch(userLogOut());
    }
  }
  data.status === "success"
    ? dispatch(getProducts(data.result))
    : dispatch(resFail(data));
};
export const deleteProductAction = (_id) => async (dispatch) => {
  dispatch(resPending());

  const data = await deleteProduct(_id);

  //=== re auth
  if (data.message === "jwt expired") {
    const token = await newAccessJWT();

    if (token) {
      dispatch(deleteProductAction(_id));
    } else {
      dispatch(userLogOut());
    }
  }
  //====== re auth

  if (data.status === "success") {
    dispatch(deleteProdSuccess(data));
    dispatch(getProductAction());
    return;
  }

  dispatch(resFail(data));
};
export const addProductAction = (prodInfo) => async (dispatch) => {
  dispatch(resPending());

  const data = await addProduct(prodInfo);

  //=== re auth
  if (data.message === "jwt expired") {
    const token = await newAccessJWT();

    if (token) {
      dispatch(addProductAction(prodInfo));
    } else {
      dispatch(userLogOut());
    }
  }
  //====== re auth

  if (data.status === "success") {
    dispatch(addProdSuccess(data));
    dispatch(getProductAction());
    return;
  }

  dispatch(resFail(data));
};

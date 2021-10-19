import {
  fetchCategoriesSuccess,
  reqPending,
  reqFails,
  addCatSuccess,
  deleteCatSuccess,
  updateCatSuccess,
} from "./categorySlice";
import {
  fetchCategory,
  addCategory,
  deleteCategory,
  updateCategory,
} from "../../apis/categoryApi";
import { userLogOut } from "../admin-user/userAction";
import { newAccessJWT } from "../../apis/tokenApi";
export const getCategories = () => async (dispatch) => {
  dispatch(reqPending());
  //call api
  const result = await fetchCategory();
  console.log(result);
  if (result?.message === "jwt expired") {
    const token = await newAccessJWT();
    console.log("time to request new jwt");
    //re auth
    if (token) {
      dispatch(getCategories());
    } else {
      dispatch(userLogOut());
    }
  }
  if (result?.status === "success") {
    return dispatch(fetchCategoriesSuccess(result));
  }

  dispatch(reqFails(result));
};
export const addNewCat = (catObj) => async (dispatch) => {
  dispatch(reqPending());
  const result = await addCategory(catObj);
  console.log(result);
  if (result.message === "jwt expired") {
    const token = await newAccessJWT();
    console.log("time to request new jwt");
    //re auth
    if (token) {
      dispatch(addNewCat(catObj));
    } else {
      dispatch(userLogOut());
    }
  }
  if (result.status === "success") {
    dispatch(getCategories());
    return dispatch(addCatSuccess(result));
  }
  dispatch(reqFails(result));
};
export const categoryUpdate = (catObj) => async (dispatch) => {
  dispatch(reqPending());
  const result = await updateCategory(catObj);
  console.log(result);
  if (result.message === "jwt expired") {
    const token = await newAccessJWT();
    console.log("time to request new jwt");
    //re auth
    if (token) {
      dispatch(categoryUpdate(catObj));
    } else {
      dispatch(userLogOut());
    }
  }
  if (result.status === "success") {
    dispatch(updateCatSuccess(result));
    dispatch(getCategories());
    return;
  }
  dispatch(reqFails(result));
};
export const categoryDelete = (id) => async (dispatch) => {
  dispatch(reqPending());
  const result = await deleteCategory(id);
  console.log(result);
  if (result.message === "jwt expired") {
    const token = await newAccessJWT();
    console.log("time to request new jwt");
    //re auth
    if (token) {
      dispatch(categoryDelete(id));
    } else {
      dispatch(userLogOut());
    }
  }
  if (result.status === "success") {
    dispatch(deleteCatSuccess(result));
    dispatch(getCategories());
    return;
  }
  dispatch(reqFails(result));
};

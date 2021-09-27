import {
  fetchCategoriesSuccess,
  reqPending,
  reqFails,
  addCatSuccess,
} from "./categorySlice";
import { fetchCategory, addCategory } from "../../apis/categoryApi";
export const getCategories = () => async (dispatch) => {
  dispatch(reqPending());
  //call api
  const result = await fetchCategory();
  console.log(result);
  if (result?.status === "success") {
    return dispatch(fetchCategoriesSuccess(result.categories));
  }

  dispatch(reqFails(result));
};
export const addNewCat = (catObj) => async (dispatch) => {
  dispatch(reqPending());
  const result = await addCategory(catObj);
  console.log(result);
  if (result.status === "success") {
    dispatch(getCategories());
    return dispatch(addCatSuccess(result));
  }
  dispatch(reqFails(result));
};

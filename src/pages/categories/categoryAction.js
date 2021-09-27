import {
  fetchCategoriesSuccess,
  reqPending,
  reqFails,
  addCatSuccess,
  deleteCatSuccess,
} from "./categorySlice";
import {
  fetchCategory,
  addCategory,
  deleteCategory,
} from "../../apis/categoryApi";
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
export const categoryDelete = (id) => async (dispatch) => {
  dispatch(reqPending());
  const result = await deleteCategory(id);
  console.log(result);
  if (result.status === "success") {
    dispatch(deleteCatSuccess(result));
    dispatch(getCategories());
    return;
  }
  dispatch(reqFails(result));
};

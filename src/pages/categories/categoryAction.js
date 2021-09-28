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
export const categoryUpdate = (catObj) => async (dispatch) => {
  dispatch(reqPending());
  const result = await updateCategory(catObj);
  console.log(result);
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
  if (result.status === "success") {
    dispatch(deleteCatSuccess(result));
    dispatch(getCategories());
    return;
  }
  dispatch(reqFails(result));
};

import axios from "axios";
const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:8000";

const catApi = rootUrl + "/api/v1/category";

export const fetchCategory = async () => {
  try {
    const { data } = await axios.get(catApi);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return { status: "error", message: error.message };
  }
};

export const addCategory = async (catObj) => {
  try {
    const { data } = await axios.post(catApi, catObj);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return { status: "error", message: error.message };
  }
};
export const deleteCategory = async (id) => {
  try {
    const { data } = await axios.delete(catApi + "/" + id);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return { status: "error", message: error.message };
  }
};
export const updateCategory = async (catObj) => {
  try {
    const { data } = await axios.patch(catApi, catObj);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return { status: "error", message: error.message };
  }
};

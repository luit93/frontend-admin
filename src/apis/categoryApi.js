import axios from "axios";
const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:8000";

const catApi = rootUrl + "/api/v1/category";

export const fetchCategory = async () => {
  try {
    const { data } = await axios.get(catApi, {
      headers: {
        Authorization: window.sessionStorage.getItem("accessJWT"),
      },
    });

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export const addCategory = async (catObj) => {
  try {
    const { data } = await axios.post(catApi, catObj, {
      headers: {
        Authorization: window.sessionStorage.getItem("accessJWT"),
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
export const deleteCategory = async (id) => {
  try {
    const { data } = await axios.delete(catApi + "/" + id, {
      headers: {
        Authorization: window.sessionStorage.getItem("accessJWT"),
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
export const updateCategory = async (catObj) => {
  try {
    const { data } = await axios.patch(catApi, catObj, {
      headers: {
        Authorization: window.sessionStorage.getItem("accessJWT"),
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

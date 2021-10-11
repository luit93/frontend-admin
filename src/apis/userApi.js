import axios from "axios";
const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:8000";
const userAPI = rootUrl + "/api/v1/user";

export const createNewUser = async (userInfo) => {
  try {
    const { data } = await axios.post(userAPI, userInfo);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return { status: "error", message: error.message };
  }
};
export const verifyNewUserEmail = async (userInfo) => {
  try {
    const { data } = await axios.post(
      userAPI + "/email-verification",
      userInfo
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return { status: "error", message: error.message };
  }
};
export const loginAdmin = async (userInfo) => {
  try {
    const { data } = await axios.post(userAPI + "/login", userInfo);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return { status: "error", message: error.message };
  }
};
export const fetchUserProfile = async (userInfo) => {
  try {
    const { data } = await axios.get(userAPI, {
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
export const updateUserProfile = async (obj) => {
  try {
    const { data } = await axios.put(userAPI, obj, {
      headers: {
        Authorization: window.sessionStorage.getItem("accessJWT"),
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error.response.data || error.message;
  }
};
export const updateUserPassword = async (obj) => {
  try {
    const { data } = await axios.patch(userAPI, obj, {
      headers: {
        Authorization: window.sessionStorage.getItem("accessJWT"),
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return error.response.data || error.message;
  }
};

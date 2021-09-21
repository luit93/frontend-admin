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

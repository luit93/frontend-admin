import axios from "axios";
const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:8000";
const tokenAPI = rootUrl + "/api/v1/token";

export const newAccessJWT = async () => {
  try {
    const config = {
      headers: { Authorization: window.localStorage.getItem("refreshJWT") },
    };
    const { data } = await axios.get(tokenAPI, config);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return { status: "error", message: error.message };
  }
};

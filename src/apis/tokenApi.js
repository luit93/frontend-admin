import axios from "axios";
const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:8000";
const tokenAPI = rootUrl + "/api/v1/token";

export const newAccessJWT = async () => {
  try {
    //remove old token
    window.sessionStorage.removeItem("accessJWT");
    const config = {
      headers: { Authorization: window.localStorage.getItem("refreshJWT") },
    };
    //request new token from server
    const { data } = await axios.get(tokenAPI, config);
    //set new token in the session
    data && window.sessionStorage.setItem("accessJWT", data.accessJWT);
    return window.sessionStorage.getItem("accessJWT");
  } catch (error) {
    console.log(error);
    return false;
  }
};

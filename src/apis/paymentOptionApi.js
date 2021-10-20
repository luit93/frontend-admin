import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:8000";

const payOptAPI = rootUrl + "/api/v1/payment-option";

export const fetchPayOptions = async () => {
  try {
    // request new token form server
    const { data } = await axios.get(payOptAPI, {
      headers: {
        Authorization: window.localStorage.getItem("refreshJWT"),
      },
    });

    return data;
  } catch (error) {
    return error.response?.data || { status: "error", message: error.message };
  }
};

export const newPaymentOPtion = async (frmDt) => {
  try {
    // request new token form server
    const { data } = await axios.post(payOptAPI, frmDt, {
      headers: {
        Authorization: window.localStorage.getItem("refreshJWT"),
      },
    });

    return data;
  } catch (error) {
    return error.response?.data || { status: "error", message: error.message };
  }
};
export const deletePaymentOPtion = async (_id) => {
  try {
    // request new token form server
    const { data } = await axios.delete(`${payOptAPI}/${_id}`, {
      headers: {
        Authorization: window.localStorage.getItem("refreshJWT"),
      },
    });

    return data;
  } catch (error) {
    return error.response?.data || { status: "error", message: error.message };
  }
};

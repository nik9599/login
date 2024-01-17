import axios from "axios";

export const signUpUser = async (data) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      // Add any other headers you may need, such as authorization headers
    };

    const resp = await axios.post(
      "https://dev-api.lazyfolks.in/accounts/signup/",
      data,
      { headers }
    );

    if (resp.status === 200) {
      return resp.data;
    } else {
      return "Error while making request";
    }
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

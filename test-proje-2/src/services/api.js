import axios from "axios";

export default class Api {
  apiClient = axios.create({
    baseURL: "https://api-testxtre.definexlabs.com/api/account",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  login(data) {
    return this.apiClient.post("/Authentication/Login", data);
  }
}

import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { IsLogin, GetUser } from "../Helper/Auth";

const http = axios.create({
  baseURL: process.env.REACT_APP_VIKTIK_API_URL,
});

// Obtain the fresh token each time the function is called
function getAccessToken() {
  return localStorage.getItem("token");
}

// Obtain the user token each time the function is called
function getUserToken() {
  const user = getUser();
  if (user && user.token) {
    return "Bearer " + user.token;
  } else {
    return "";
  }
}
// Use interceptor to inject the token to requests
http.interceptors.request.use((request) => {
  request.headers["Authorization"] = `${getAccessToken()}`;
  if (isLogin()) request.headers["UserToken"] = `${getUserToken()}`;
  return request;
});

// Function that will be called to refresh authorization
const refreshAuthLogic = (failedRequest) =>
  http
    .post("/auth", {
      appId: process.env.REACT_APP_VIKTIK_API_ID, //"viktik-fe-admin"
      secretKey: process.env.REACT_APP_VIKTIK_API_SECRET, //"vHBom04dkKr3ZXHk"
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem("token", response.headers.authorization);
        failedRequest.response.config.headers["Authorization"] =
          response.headers.authorization;
        return Promise.resolve();
      }
      return Promise.reject("Renew token failed!");
    });

// Instantiate the interceptor (you can chain it as it returns the axios instance)
createAuthRefreshInterceptor(http, refreshAuthLogic);

export default http;

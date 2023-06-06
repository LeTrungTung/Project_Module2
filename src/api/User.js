import axiosClient from "./AxiosClient";

export class UserAPI {
  // API đăng ký
  static register(param) {
    const url = "/register";
    return axiosClient.post(url, param);
  }
  //   API đăng nhập
  static login(param) {
    const url = "/login";
    return axiosClient.post(url, param);
  }
}

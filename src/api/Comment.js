import axiosClient from "./AxiosClient";

class CommentAPI {
  static postComment(params) {
    const url = "/comments";
    return axiosClient.post(url, params);
  }

  static getAllComment() {
    const url = "/comments";
    return axiosClient.get(url);
  }
}
export default CommentAPI;

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

  static updateLike(params) {
    const url = `/comments/${params.id}`;
    return axiosClient.patch(url, params);
  }
}
export default CommentAPI;

import axiosClient from "./AxiosClient";

class InfoImageAPI {
  // lấy tất cả
  static getAllImage() {
    const url = "/infoimage";
    return axiosClient.get(url);
  }
  static addImage(params) {
    const url = "/infoimage";
    return axiosClient.post(url, params);
  }
  static editImage(params) {
    const url = `/infoimage/${params.id}`;
    return axiosClient.patch(url, params);
  }
}

export default InfoImageAPI;

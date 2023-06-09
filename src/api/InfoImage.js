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
}

export default InfoImageAPI;

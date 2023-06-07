import axiosClient from "./AxiosClient";

class InfoImageAPI {
  // lấy tất cả
  static getAllImage() {
    const url = "/infoimage";
    return axiosClient.get(url);
  }
}

export default InfoImageAPI;

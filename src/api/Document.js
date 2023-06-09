import axiosClient from "./AxiosClient";

class DocumentAPI {
  static postDocument(params) {
    console.log(params);
    const url = "/documents";
    return axiosClient.post(url, params);
  }
  static getAllDocument() {
    const url = "/documents";
    return axiosClient.get(url);
  }
}
export default DocumentAPI;

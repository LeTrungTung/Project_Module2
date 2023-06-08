import React from "react";
import DetailImage from "../../components/DetailImage/DetailImage";
import HeaderOnLogin from "../../components/common/header/HeaderOnLogin";
import "./Detail.css";
const Detail = () => {
  return (
    <div id="wrap-page-detail">
      <HeaderOnLogin />
      <DetailImage />
    </div>
  );
};

export default Detail;

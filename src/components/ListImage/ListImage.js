import React, { memo, useEffect } from "react";
import "./ListImage.css";
import { useSelector } from "react-redux";
import { Router } from "react-router-dom";
import CardImage from "../CardImage/CardImage";

const ListImage = () => {
  // Lấy danh sách ảnh từ Redux store
  const imageList = useSelector((state) => state.infoimage);
  return (
    <div>
      <CardImage dataImage={imageList} />
    </div>
  );
};

export default memo(ListImage);

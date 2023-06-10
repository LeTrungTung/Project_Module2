import React, { memo, useEffect } from "react";
import "./ListImage.css";
import { useSelector } from "react-redux";
import { Router } from "react-router-dom";
import CardImage from "../CardImage/CardImage";
const MemoizedCardImage = memo(CardImage);
const ListImage = () => {
  const imageList = useSelector((state) => state.infoimage);
  return (
    <div>
      {/* {imageList.map((image) => ( */}
      {/* <CardImage dataImage={imageList} /> */}
      <MemoizedCardImage dataImage={imageList} />

      {/* ))} */}
    </div>
  );
};

export default ListImage;

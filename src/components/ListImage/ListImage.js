import React from "react";
import "./ListImage.css";
import { useSelector } from "react-redux";
import MasonryImageList from "../CardImage/CardImage";
const ListImage = () => {
  const imageList = useSelector((state) => state.infoimage);
  return (
    <div>
      {/* {imageList.map((image) => ( */}
      <MasonryImageList dataImage={imageList} />
      {/* ))} */}
    </div>
  );
};

export default ListImage;

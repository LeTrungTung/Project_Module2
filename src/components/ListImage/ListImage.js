import React from "react";
import "./ListImage.css";
import { useSelector } from "react-redux";
const ListImage = () => {
  const imageList = useSelector((state) => state.infoimage);
  return (
    <div className="root-list">
      {imageList.map((img) => (
        <img src={img.urlImage} />
      ))}
    </div>
  );
};

export default ListImage;

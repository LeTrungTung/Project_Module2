import React from "react";
import { Container } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import "./ImageManage.css";
import UserManage from "./UserManage";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CRUDImage from "./CRUDImage";
import "./ImageManage.css";

const ImageManage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div id="wrap-admin">
      <div id="header-admin">
        <div id="header-admin-left" onClick={() => navigate("/")}>
          <img src="https://seeklogo.com/images/P/pinterest-logo-B783288EDA-seeklogo.com.png" />
        </div>
        <div id="sec-center">
          <ul>
            <Link to="/admin">
              <li>Quản lý người dùng</li>
            </Link>
            <Link to="/images">
              <li
                className={
                  location.pathname == "/images" ? "active" : ""
                }
              >
                Quản lý hình ảnh
              </li>
            </Link>
          </ul>
        </div>
        <div id="header-admin-left">
          <div id="sec-right">
            <img src="https://i.pinimg.com/236x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" />
            <IoIosArrowDown id="icon-admin" />
          </div>
        </div>
      </div>
      <div className="content-body">
        <h1 id="title-crud-1">Quản lý hình ảnh</h1>
        <CRUDImage />
      </div>
    </div>
  );
};

export default ImageManage;

import React from "react";
import { Container } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import "./Admin.css";
import UserManage from "./UserManage";

const Admin = () => {
  return (
    <div id="wrap-admin">
      <div id="header-admin">
        <div id="header-admin-left">
          <img src="https://seeklogo.com/images/P/pinterest-logo-B783288EDA-seeklogo.com.png" />
        </div>
        <div id="sec-center">
          <ul>
            <li>Users Management</li>
            <li>Products Management</li>
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
        <UserManage />
      </div>
    </div>
  );
};

export default Admin;

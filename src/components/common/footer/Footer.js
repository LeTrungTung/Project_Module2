import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div id="id-footer">
      <Link>Điều khoản dịch vụ</Link>
      <Link>Chính sách</Link>
      <Link>Trợ giúp</Link>
      <Link>Người dùng</Link>
      <Link>Bộ sưu tập</Link>
      <Link>Khám phá</Link>
    </div>
  );
};

export default Footer;

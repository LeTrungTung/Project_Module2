import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import "./HeaderOnLogin.css";
import InfoImageAPI from "../../../api/InfoImage";
import { handleAddImageAPI } from "../../../redux/reducer/InfoImageSilce";
import ModalForm from "./ModalForrm";
import { useDispatch } from "react-redux";

const HeaderOnLogin = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAddImage = () => {
    setShowModal(true);
    // const newImage = {
    //   title: 1,
    //   description: 2,
    //   urlImage: 3,
    //   author: 4,
    // };
  };

  return (
    <Container fluid id="header1">
      {showModal && (
        <ModalForm show={showModal} setShow={setShowModal} />
      )}
      <Row>
        <Col lg="3" md="4" xs="6" id="left-header1">
          <img
            src="https://img.freepik.com/premium-vector/square-pinterest-logo-isolated-white-background_469489-896.jpg?w=740"
            alt="logomini"
            className="cl-hover"
            id="minilogo"
          />
          <button id="btn-mainpage">Trang chủ</button>
          <button id="btn-create" onClick={handleAddImage}>
            Thêm ảnh
            <IoIosArrowDown id="arrow-create" />
          </button>
        </Col>

        <Col
          style={{ display: "flex", alignItems: "center" }}
          lg="7"
          md="4"
          xs="1"
        >
          <BiSearchAlt2 id="icon-search" />
          <input type="search" placeholder="Search" id="ip-search" />
        </Col>
        <Col lg="2" md="4" xs="6" id="right-header1">
          <BsBellFill className="cl-hover" id="bell" />
          <AiFillMessage className="cl-hover" id="message" />
          <img
            src="https://cdn.onlinewebfonts.com/svg/img_542942.png"
            alt="avatar"
            className="cl-hover"
            id="avatar"
          />
          <IoIosArrowDown id="arrow-avatar" />
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderOnLogin;

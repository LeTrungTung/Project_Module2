import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import CommentAPI from "../../api/Comment";
import { handleCallCommentAPI } from "../../redux/reducer/CommentSlice";
import { ClassNames } from "@emotion/react";
import DocumentAPI from "../../api/Document";
import { handleCallDocumentAPI } from "../../redux/reducer/DocumentSlice";
import "./CrudDetail.css";
import { handleEditImageAPI } from "../../redux/reducer/InfoImageSilce";

const CrudDetail = () => {
  const paramsId = useParams();
  const numberId = Number(paramsId.id);
  const [imageViewDetail, setImageViewDetail] = useState();
  const imageList = useSelector((state) => state.infoimage);
  //  Gọi dữ liệu comment từ redux về
  useEffect(() => {
    const imageViewDetail1 = imageList.find(
      (image) => image.id === numberId
    );
    setImageViewDetail(imageViewDetail1);
  }, []);
  console.log(imageViewDetail);

  const userLogin = JSON.parse(localStorage.getItem("user")) || [];
  // console.log("login", userLogin);
  const dispatch = useDispatch();
  const documentList = useSelector((state) => state.documents);
  // console.log("listDC", documentList);

  const [formEdit, setFormEdit] = useState({
    title: "",
    author: "",
    description: "",
  });

  const handleEditImage = () => {
    setFormEdit({
      title: imageViewDetail?.title,
      author: imageViewDetail?.author,
      description: imageViewDetail?.description,
    });
  };

  const handleFormChange = (e) => {
    setFormEdit({
      ...formEdit,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    // Handle saving changes logic here
    console.log("formedit", formEdit);
    await dispatch(handleEditImageAPI(formEdit)).unwrap();

    // Reset formEdit to empty values
    setFormEdit({
      title: "",
      author: "",
      description: "",
    });
  };

  //thu la lay data của thằng /infoimage sau tìm kiếm cái thằng id của thằng a mới click sau đó ... giữ file đấy cập lại các cặp key và value ví dụ { ...objec, formEdit}
  return (
    <Container id="wrap-detail">
      <div id="left-area">
        <img src={imageViewDetail?.urlImage} alt="" id="img-detail" />
      </div>
      <div id="right-area">
        <div id="right-area-top">
          <div id="top-right">
            <div>
              <Button variant="primary" onClick={handleEditImage}>
                Hiệu chỉnh
              </Button>
            </div>
            <div>
              <Button variant="danger">Xóa ảnh</Button>
            </div>
          </div>
          <h4>Tiêu đề ảnh: {imageViewDetail?.title}</h4>
          <p>
            <span>Nguồn gốc trang: </span>
            <u>{imageViewDetail?.author}</u>
          </p>
          <p>Mô tả ảnh: {imageViewDetail?.description}</p>
          <br />
          <div id="forrm-edit">
            <h5 style={{ textAlign: "center" }}>
              Form hiệu chỉnh hình ảnh
            </h5>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Tiêu đề ảnh</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Tiêu đề ảnh"
                  value={formEdit.title}
                  onChange={handleFormChange}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nguồn gốc trang</Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  placeholder="Nguồn gốc trang"
                  value={formEdit.author}
                  onChange={handleFormChange}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Mô tả ảnh</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="description"
                  value={formEdit.description}
                  onChange={handleFormChange}
                />
              </Form.Group>
              <Button
                style={{ textAlign: "center !important" }}
                onClick={handleSaveChanges}
              >
                Lưu thay đổi
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CrudDetail;

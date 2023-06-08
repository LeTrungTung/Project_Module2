import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import "./DetailImage.css";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import CommentAPI from "../../api/Comment";
import { handleCallCommentAPI } from "../../redux/reducer/CommentSlice";
const DetailImage = () => {
  const paramsId = useParams();
  const numberId = Number(paramsId.id);
  const imageList = useSelector((state) => state.infoimage);
  //  Gọi dữ liệu comment từ redux về
  const commentList = useSelector((state) => state.comments);
  console.log("cm,", commentList);

  const imageViewDetail = imageList.find(
    (image) => image.id === Number(paramsId.id)
  );
  console.log(33, imageViewDetail);
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const userLogin = JSON.parse(localStorage.getItem("user")) || [];
  // console.log("login", userLogin);
  const dispatch = useDispatch();
  const handleAddComment = () => {
    if (comment.trim() !== "") {
      const newComment = {
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU",
        idUser: userLogin.id,
        idImage: Number(paramsId.id),
        person: userLogin.name,
        note: comment,
        heart: 0,
        timecreate: new Date().toLocaleDateString("en-GB"),
      };
      CommentAPI.postComment(newComment)
        .then((response) => {
          console.log("Comment sent successfully:", response.data);
          // update lại dữ liệu từ DB về Redux
          dispatch(handleCallCommentAPI()).unwrap();
          setComment("");
        })
        .catch((error) => {
          // Xử lý khi gửi bình luận gặp lỗi
          console.error("Error sending comment:", error);
        });
    }
  };

  // đếm số lượng nhận xét của ảnh được chọn
  const count = commentList.filter(
    (comment) => comment.idImage === numberId
  );
  // console.log("count", count.length);

  return (
    <Container id="wrap-detail">
      <div id="left-area">
        <img src={imageViewDetail?.urlImage} alt="" id="img-detail" />
      </div>
      <div id="right-area">
        <div id="right-area-top">
          <div id="top-right">
            <div id="document-save">
              <div id="id-document">
                <span>Hồ sơ </span>
                <IoIosArrowDown />
              </div>
              <div>
                <button id="id-save">Lưu</button>
              </div>
            </div>
            <div>
              <BsThreeDots id="id-dot" />
            </div>
          </div>
          <p>
            <u>{imageViewDetail?.author}</u>
          </p>
          <h3>{imageViewDetail?.title}</h3>
          <br />
          <p>
            <h5>
              <span>{count.length} </span> <span>Nhận xét</span>{" "}
              <IoIosArrowDown id="id-arrowdown" />
            </h5>
          </p>
          {commentList &&
            commentList
              .filter((imageView) => imageView.idImage === numberId)
              .map((item, index) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      marginTop: "25px",
                    }}
                  >
                    <div>
                      <img
                        src={item.avatar}
                        alt=""
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div>
                      <div style={{ display: "flex", gap: "15px" }}>
                        <u style={{ fontWeight: "500" }}>
                          {" "}
                          {item.person}
                        </u>
                        <span>{item.note}</span>
                      </div>
                      <div style={{ display: "flex", gap: "30px" }}>
                        <span>{item.timecreate}</span>
                        <span>
                          <AiOutlineHeart id="id-heart" />
                          {item.heart > 0 ? item.heart : ""}
                        </span>
                        <span>
                          <BsThreeDots id="id-dots" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
        <div id="right-area-bottom">
          <hr />
          <div id="bottom-comment">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU"
              alt=""
              id="avatar-comment"
            />
            <input
              type="text"
              placeholder="Thêm nhận xét"
              id="content-comment"
              value={comment}
              onChange={handleCommentChange}
            />
            <button
              style={{ border: "none", backgroundColor: "white" }}
              onClick={handleAddComment}
            >
              <BsFillCaretRightSquareFill id="btn-add-comment" />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DetailImage;

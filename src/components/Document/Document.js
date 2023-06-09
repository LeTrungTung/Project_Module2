import React from "react";
import { Container } from "react-bootstrap";
import "./Document.css";
const Document = () => {
  return (
    <Container id="wrap-document">
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU"
          alt="avatar"
          id="avatar-dc"
        />
      </div>

      <h2 id="name-user">Tên người dùng</h2>
      <p id="email-user">Email</p>
      <p id="saved">Hồ sơ đã lưu</p>
      <p id="date-create">Ngày tạo</p>
      <p>Hình ảnh theo ngày tạo</p>
    </Container>
  );
};

export default Document;

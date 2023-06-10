// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { IoIosArrowDown } from "react-icons/io";
// import { BiSearchAlt2 } from "react-icons/bi";
// import { BsBellFill } from "react-icons/bs";
// import { AiFillMessage } from "react-icons/ai";

// const Vd = () => {
//   return (
//     <div>
//       <Row>
//         <Col lg="2" md="4" xs="6" id="right-header1">
//           <BsBellFill className="cl-hover" id="bell" />
//           <AiFillMessage className="cl-hover" id="message" />
//           <img
//             src="https://cdn.onlinewebfonts.com/svg/img_542942.png"
//             alt="avatar"
//             className="cl-hover"
//             id="avatar"
//           />
//           <IoIosArrowDown
//             id="arrow-avatar"
//             // onClick={handleArrowClick}
//             // className={isMenuOpen ? "open" : ""}
//           />
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Vd;

import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { BsBellFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import "./vd.css";
const Vd = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleArrowClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Row>
        <Col lg="2" md="4" xs="6" id="right-header1">
          <BsBellFill className="cl-hover" id="bell" />
          <AiFillMessage className="cl-hover" id="message" />
          <div className="menu-container">
            <img
              src="https://i.pinimg.com/564x/8e/f6/77/8ef67728fdc21ab972115df8fc84cdb6.jpg"
              alt="avatar"
              className="cl-hover"
              id="avatar"
              onClick={handleArrowClick}
            />
            {isMenuOpen && (
              <div className="menu-dropdown">
                <span className="logout">Đăng xuất</span>
                <span className="logout">scngjkldgkldmgl</span>
              </div>
            )}
          </div>
          <IoIosArrowDown
            id="arrow-avatar"
            onClick={handleArrowClick}
            className={isMenuOpen ? "open" : ""}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Vd;

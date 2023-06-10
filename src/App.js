import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./components/Login/Login";
import Auth from "./pages/auth/Auth";
import Register from "./components/Register/Register";
import UploadImage from "./components/uploadImage/UploadImage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleCallImageAPI } from "./redux/reducer/InfoImageSilce";
import Detail from "./pages/detail/Detail";
import CardImage from "./components/CardImage/CardImage";
import { handleCallCommentAPI } from "./redux/reducer/CommentSlice";
import InfoDocument from "./pages/document/InfoDocument";
import { handleGetDocumentAPI } from "./redux/reducer/DocumentSlice";
import Vd from "./components/common/header/vd";
import Admin from "./components/admin/Admin";
import { handleGetUsersAPI } from "./redux/reducer/ListUserSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleGetComment = async () => {
      await dispatch(handleCallCommentAPI()).unwrap();
    };
    // gọi trường dữ liệu Document từ API về
    const handleGetDocumment = async () => {
      await dispatch(handleGetDocumentAPI()).unwrap();
    };

    const getAllImage = async () => {
      await dispatch(handleCallImageAPI()).unwrap();
    };
    const getListUsser = async () => {
      await dispatch(handleGetUsersAPI()).unwrap();
    };
    getListUsser();
    getAllImage();

    handleGetComment();
    handleGetDocumment();
  }, []);

  // const { id } = useParams(); //lấy tham số id từ URL
  // console.log("ktra Id", id);
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/uploadImage" element={<UploadImage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/document" element={<InfoDocument />} />
        {/* <Route path="/vd" element={<Vd />} /> */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;

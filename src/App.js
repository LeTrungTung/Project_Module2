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

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleGetComment = async () => {
      await dispatch(handleCallCommentAPI()).unwrap();
    };
    handleGetComment();
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
      </Routes>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./components/Login/Login";
import Auth from "./pages/auth/Auth";
import Register from "./components/Register/Register";
import UploadImage from "./components/uploadImage/UploadImage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleCallImageAPI } from "./redux/reducer/InfoImageSilce";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/uploadImage" element={<UploadImage />} />
      </Routes>
    </div>
  );
}

export default App;

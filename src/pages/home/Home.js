import React, { useEffect } from "react";
import Header from "../../components/common/header/Header";
import Slider from "../../components/Slider/Slider";
import Banner from "../../components/common/banner/Banner";
import Banner1 from "../../components/common/banner1/Banner1";
import Footer from "../../components/common/footer/Footer";
import HeaderOnLogin from "../../components/common/header/HeaderOnLogin";
import { useDispatch } from "react-redux";
import { handleCallImageAPI } from "../../redux/reducer/InfoImageSilce";
import ListImage from "../../components/ListImage/ListImage";
import MasonryImageList from "../../components/CardImage/CardImage";

const Home = () => {
  const login = JSON.parse(localStorage.getItem("user"));

  // gọi API và lưu vào redux
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllImage = async () => {
      await dispatch(handleCallImageAPI()).unwrap();
    };
    getAllImage();
  }, []);

  return (
    <div>
      {login ? <HeaderOnLogin /> : <Header />}
      {login ? (
        <ListImage />
      ) : (
        <>
          <Slider />
          <Banner />
          <Banner1 />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;

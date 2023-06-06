import React from "react";
import Header from "../../components/common/header/Header";
import Slider from "../../components/Slider/Slider";
import Banner from "../../components/common/banner/Banner";
import Banner1 from "../../components/common/banner1/Banner1";
import Footer from "../../components/common/footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Banner />
      <Banner1 />
      <Footer />
    </div>
  );
};

export default Home;

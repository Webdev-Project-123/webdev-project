import Footer from "./Footer";
import Header from "./Header";
import Slider from "react-slick";
import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./customSlick.css";

const banners = [
  "https://gamepress.gg/arknights/sites/arknights/files/2021-07/EunectesBannerRerun_0.jpeg",
  "https://gamepress.gg/arknights/sites/arknights/files/2021-08/UnboundRefluxRerun_0.jpeg",
  "https://gamepress.gg/arknights/sites/arknights/files/2021-09/SaileachBanner_0.jpeg",
  "https://gamepress.gg/arknights/sites/arknights/files/2021-10/BlemishineRerun.jpeg",
  "https://gamepress.gg/arknights/sites/arknights/files/2021-10/FartoothBanner_0.jpeg",
  "https://gamepress.gg/arknights/sites/arknights/files/2021-10/JointOperation5_0.jpeg",
];

const slider = () => {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    centerMode: true
  };

  return <Slider {...settings}>
    {
      banners.map((banner, index) => {
        return <p key={index}>
          <img src={banner} />
        </p>
      })
    }
  </Slider >
}

const Home = () => {
  return <div className="bg-[#F5F5F5]">
    <Header isLogin={false} />
    <div className="p-16 flex">
      <div>as</div>
      <div className="w-3/4 ml-auto">
        {slider()}
      </div>
    </div>
    <Footer />
  </div>;
};

export default Home;

import Footer from "./Footer";
import Header from "./Header";
import Slider from "react-slick";
import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles/customSlick.css";
import Categories from "./Categories";
import ProductThumb from "./ProductThumb";
import GroupThumb from "./GroupThumb";

const banners = [
  "https://gamepress.gg/arknights/sites/arknights/files/2021-07/EunectesBannerRerun_0.jpeg",
  "https://gamepress.gg/arknights/sites/arknights/files/2021-08/UnboundRefluxRerun_0.jpeg",
  "https://gamepress.gg/arknights/sites/arknights/files/2021-09/SaileachBanner_0.jpeg",
  "https://gamepress.gg/arknights/sites/arknights/files/2021-10/BlemishineRerun.jpeg",
  "https://gamepress.gg/arknights/sites/arknights/files/2021-10/FartoothBanner_0.jpeg",
  "https://gamepress.gg/arknights/sites/arknights/files/2021-10/JointOperation5_0.jpeg",
];

const groups = [
  'Fiction',
  'Nonfiction',
  'All products'
];

const productData = [
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'Chuyển sinh thành giếng nước, tôi trở thành bla bla bla bla blas',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  }
]

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
  return <div className="bg-[#FCECDD]">
    <Header isLogin={false} />

    {/* BANNERS*/}
    <div className="px-4 pt-8 mb-4 flex">
      <div className="w-full">
        {slider()}
      </div>
    </div>

    {/* GROUPS */}
    <div className="px-16 mt-10 mb-4 grid grid-cols-3 gap-8">
      {groups.map((group, index) =>
        <GroupThumb groupData={group} key={index} />
      )}
    </div>

    {/* CATEGORIES */}
    <div className="px-16 mt-9 mb-4">
      <Categories />
    </div>

    {/* HOT DEALS */}
    <div className="px-16 py-4 mb-4">
      <h1 className="py-2 text-xl rounded-t-lg text-center font-extrabold bg-[#FEA82F]">
        HOT DEALS!
      </h1>
      <div className="bg-white grid md:grid-cols-4 lg:grid-cols-5 rounded-b-lg">
        {productData.map((data, index) =>
          <ProductThumb key={index} productData={data} />
        )}
      </div>
    </div>

    <Footer />
  </div>;
};

export default Home;

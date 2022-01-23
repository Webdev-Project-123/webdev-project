import Footer from "./Footer";
import Header from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles/customSlick.css";
import Categories from "./Categories";
import ProductThumb from "./ProductThumb";
import '../index.css';
import { Link } from "react-router-dom";

const banners = [
  "https://gamepress.gg/arknights/sites/arknights/files/2021-07/EunectesBannerRerun_0.jpeg",
  "https://gamepress.gg/arknights/sites/arknights/files/2021-08/UnboundRefluxRerun_0.jpeg",
  "https://gamepress.gg/arknights/sites/arknights/files/2021-09/SaileachBanner_0.jpeg",
  "https://gamepress.gg/arknights/sites/arknights/files/2021-10/BlemishineRerun.jpeg",
  "https://gamepress.gg/arknights/sites/arknights/files/2021-10/FartoothBanner_0.jpeg",
  "https://gamepress.gg/arknights/sites/arknights/files/2021-10/JointOperation5_0.jpeg",
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
    <Header />
    {/* BANNERS*/}
    <div className="px-0 sm:px-4 pt-8 mb-4 flex">
      <div className="w-full">
        {slider()}
      </div>
    </div>

    {/* All Products */}
    <div className="px-2 sm:px-16 mt-10 gap-8 aspect-[4.5]">
      <Link
        to='/categories'
        className='font-sans card-zoom bg-no-repeat bg-center cursor-pointer rounded-xl h-full bg-cover bg-white w-full text-center flex items-center justify-center'
        style={{ backgroundImage: "url('./src/Home/Images/groups_background_3.jpg')" }}
      >
        <p className='card-zoom-text md:w-1/4 md:text-lg lg:w-1/5 lg:text-xl bg-opacity-90 rounded-xl p-2 font-extrabold bg-white'>
          ALL PRODUCTS
        </p>
      </Link>
    </div>

    {/* CATEGORIES */}
    <div className="px-2 sm:px-16 mt-9 mb-4">
      <Categories />
    </div>

    {/* HOT DEALS */}
    <div className="px-2 sm:px-16 py-4 mb-4">
      <h1 className="py-2 text-xl rounded-t-lg text-center font-extrabold bg-[#FEA82F]">
        HOT DEALS!
      </h1>
      <div className="hot-deal">
        {productData.map((data, index) =>
          <ProductThumb key={index} productData={data} />
        )}
      </div>
    </div>

    {/* Newsletter */}
    <div className="font-sans flex items-center justify-center  bg-white px-8 py-16 mb-8 space-y-2">
      <div>
        <p className='font-robotoS font-extrabold text-3xl text-[#FF6701]'>Sign up for our Newsletter</p>
        <p>Tell us what books you love.</p>
      </div>
      <button className="ml-4 w-1/4 md:w-1/5 md:ml-6 lg:w-[15%] font-robotoS font-bold bg-[#FEA82F] p-2 rounded-xl">SIGN UP
      </button>
    </div>

    <Footer />
  </div >;
};

export default Home;

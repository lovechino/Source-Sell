import Slider from "react-slick";
import useGetAllProduct from "../../Hooks/GetAllProduct";
import CardProduct from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdSenseAd from "../Ads/Ads";

const HotProduct = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear"
      };
      const value = useGetAllProduct()
      return (
        <div className="my-20">
            <h2 className=" text-center text-3xl my-10">Hot Product</h2>
          <Slider {...settings}>
            {
                value.map((item, index) => (
                    <CardProduct key={index} response={item} />
                ))
            }
          </Slider>
          <div className=" mt-8 p-20">
            <AdSenseAd/>
          </div>
        </div>
      );
}

export default HotProduct
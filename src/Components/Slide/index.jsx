
import Slider from "react-slick";
import useGetSingleProduct from "../../Hooks/GetSingleProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  const stack1 = useGetSingleProduct(1);
  const stack2 = useGetSingleProduct(2);
  const stack3 = useGetSingleProduct(3);
  return (
    <div cclassName="mt-20 pt-16 pb-16 bg-[#fcf6fa]">
     <div className=" mt-20 w-[90%] md:w-[80%] mx-auto">
     <Slider {...settings}>
     <Card key={stack1?.id} title={stack1?.title} image={stack1?.image} rate={stack1?.rating.rate}/>
          <Card key={stack2?.id} title={stack2?.title} image={stack2?.image} rate={stack2?.rating.rate}/>
          <Card key={stack3?.id} title={stack3?.title} image={stack3?.image} rate={stack3?.rating.rate}/>
      </Slider>
     </div>
    </div>
  );
};

export default CarouselComponent;

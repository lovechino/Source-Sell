
import useGetAllProduct from "../../Hooks/GetAllProduct";
import CardProduct from "./Card";

import { Link } from "react-router-dom";

const ListProduct = () => {
  const value = useGetAllProduct();
  
  return (
    <div id="product">
      <h2 className=" text-center text-3xl my-10">Product</h2>
      <div className=" grid grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-4">
        {value.map((item) => (
          <CardProduct key={item?.id} response={item} />
        ))}
      </div>
    </div>
  );
};

export default ListProduct;



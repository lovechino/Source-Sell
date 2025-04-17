import { BiShoppingBag } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {  setItems } from "../../Redux/Cart";
import { Link } from "react-router-dom";
import { selectProduct } from "../../Redux/Product";
import { notification } from "antd";


const CardProduct = ({response})=>{
  const{items} = useSelector(store=>store.cart)
  const dispatch = useDispatch()
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `Giỏ hàng`,
      description:
        'Thêm thành công',
      placement,
    });
  };
  const AddCart = ()=>{
     dispatch(setItems([response,...items]))
     openNotification()
  }
 
    return(
        <div className=" ml-5 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm ">
         {contextHolder}
         <Link to= "/detail">
        <div onClick={()=>dispatch(selectProduct(response))}>
        <img
            src={response.image}
            alt={response.title}
            className="w-full h-48 object-cover"
          />
        </div>
         </Link>
          
        <div className="p-4">
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{response.description}</p>
         <Link to= "/detail">
         <div onClick={dispatch(selectProduct(response))} className="flex items-center justify-between mb-2">
            <span className="text-gray-900 font-bold">${response.price}</span>
            {response.rating && (
              <div className="flex items-center text-yellow-500 text-sm">
                <svg className="w-4 h-4 fill-current mr-1" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <span>{response.rating.rate.toFixed(1)}</span> ({response.rating.count})
              </div>
            )}
          </div>
         </Link>
          <div className="flex justify-end space-x-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-md focus:outline-none focus:shadow-outline text-sm flex items-center"
              onClick={()=>AddCart()}
            >
              <BiShoppingBag className="w-5 h-5" /> 
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
    
}

export default CardProduct
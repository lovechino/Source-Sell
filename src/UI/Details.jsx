import React from 'react';
import { BiCart, BiMessage } from 'react-icons/bi';
import {useDispatch, useSelector} from "react-redux"
import { StarRating } from '../Components/Slide/Card';
import { CgShoppingCart } from 'react-icons/cg';
import { setItems } from '../Redux/Cart';
import { notification } from 'antd';
const ProductDetail = () => {
  
  
  const{selectProduct} = useSelector(store=>store.product)
   const dispatch = useDispatch()
   const{items} = useSelector(store=>store.cart)
   const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `System error`,
      description:
        'Hệ thống đang bị lỗi',
      placement,
    });
  };
   const AddCart = ()=>{
        dispatch(setItems([selectProduct,...items]))
        openNotification()
     }
  return (
    <div className=' md:mt-20'>
      {contextHolder}
      <div className=' flex flex-col justify-center items-center md:flex-row'>
         <img src= {selectProduct?.image}
          className=' object-cover h-[500px]'
         />
         <div className=' mt-5'>
           <span className=' text-2xl mt-5'>{selectProduct?.title}</span>
           <div className='text-right mr-5 text-2xl text-red-500 font-bold md:text-left'>
           {selectProduct?.price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
           </div>
           <div className='flex justify-end mr-5 md:justify-start'>
        <span className=' text-center md:text-left'>
          <StarRating rating={selectProduct?.rating?.rate} /> {selectProduct?.rating?.count}
        </span>
      </div>
           <div className=' text-center'>{selectProduct?.description}</div>
           <div className=" hidden md:flex md:justify-end md:space-x-2 md:mt-20">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-md focus:outline-none focus:shadow-outline text-sm flex items-center"
              onClick={()=>AddCart()}
            >
              <CgShoppingCart className="w-4 h-4 mr-2" /> 
              Add to Cart
            </button>
          </div>
         </div>
      </div>
       <Nav/>
    </div>
  );
};

const Nav = ()=>{
  return(
    <div className=' fixed bottom-0 bg-white shadow-md w-full transition-all duration-200 h-[5vh] z-[1000] md:hidden lg:hidden'>
       <div className=' flex items-center justify-around'>
         <div>
           <BiMessage className='w-8 h-8'/>
         </div>
         <div>
           <BiCart className='w-8 h-8'/>
         </div>
       </div>
    </div>
  )
}


export default ProductDetail;
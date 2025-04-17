
import React, {  useState } from 'react'
import { BiCart, BiMessage, BiRecycle } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { addTotal,  removeAll,  removeTotal,  setItems,  subTotal } from '../Redux/Cart'
import { FaRecycle } from 'react-icons/fa'
import { BsTrash3Fill } from 'react-icons/bs'
import { notification } from 'antd'
import Dialog from '../Components/Dialog/Dialog'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'




const Cart = () => {
  const{items} = useSelector(store=>store.cart)
  
  return(
    <div>
      <div className="space-y-5">
      {
  items.map((item, index) => {
    return <Item key={index} item={item}/>
  })
}
    </div>
    <Nav/>
    </div>
  )
}

const Item = ({item})=>{
  const dispatch = useDispatch()
  const{items} = useSelector(store=>store.cart)

  const[quality, setquality] = useState(1)
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `Giỏ hàng`,
      description:
        'Xoá thành công',
      placement,
    });
  };
  const price = item?.price * quality
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
   
    if (checked == true) {
      dispatch(addTotal(price));
    } else {
      dispatch(subTotal(price));
    }
  };

 
  const handleIncrement = () => {
    const newQuality = quality + 1;
    setquality(newQuality);
    
    if (isChecked == true) {
      dispatch(addTotal(item?.price)); 
    }
  };


  const handleDecrement = () => {
    if (quality > 1) {
      const newQuality = quality - 1;
      setquality(newQuality);
    
      if (isChecked == true) {
        dispatch(subTotal(item?.price)); 
      }
    }
  };
 const DeleteItem = (id)=>{
   const updateItems = items.filter((item)=>item?.id !== id)
   dispatch(setItems(updateItems))
   openNotification()
 }
  return (
    <div className=' flex items-center border-b border-gray-200 py-4 my-5'>
      {contextHolder}
        <div className="mr-4">
         <input type="checkbox" checked = {isChecked}  onChange={handleCheckboxChange} className="form-checkbox h-5 w-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />
       </div>
      <div className=' w-20 h-20 mr-4'>
        <img src= {item?.image}
        alt= {item?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className=' grow'>
        <h6 className='text-sm font-semibold text-gray-800'>{item?.title}</h6>
      </div>

      <div>
        <div className="flex items-center border border-gray-300 rounded">
          <button disabled ={quality == 1} onClick={handleDecrement} className="px-2 py-1 text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
          </button>
          <input
            type="text"
            className="w-8 text-center border-l border-r border-gray-300 focus:outline-none text-sm"
            value={quality}
            onChange={(e) => { 
              const newQuality = parseInt(e.target.value);
              if (!isNaN(newQuality) && newQuality > 0) {
                const diff = newQuality - quality;
                setquality(newQuality);
                if (isChecked) {
                  dispatch(addTotal(item?.price * diff));
                }
              } else if (e.target.value === '') {
                setquality(0); 
                if (isChecked) {
                  dispatch(subTotal(price)); 
                }
              }
            }}
          />
          <button onClick={handleIncrement} className="px-2 py-1 text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
          </button>
        </div>
        <div className='text-sm font-semibold text-red-500 text-center'>{price}$</div>
      </div>
      <div onClick={()=>DeleteItem(item?.id)} className=" flex justify-center items-center">
          <BsTrash3Fill className=' w-8 h-8'/>
        </div>
    </div>
  )
}
const Nav = ()=>{
  const{total} = useSelector(store=>store.cart)
  const navigate = useNavigate()
  const formattedTotal = parseFloat(total.toFixed(2));
  const[open,setOpen] = useState(false)
  const dispatch = useDispatch()
  const setClose = ()=>{
    setOpen(false)
  }
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `Giỏ hàng`,
      description:
        'Đặt hàng thành công',
      placement,
    });
  };
  const{
      register : Submit,
      handleSubmit : SubmitHandle
    } = useForm()

    const HandleSubmit = (data)=>{
      console.log(data)
      dispatch(removeAll())
      dispatch(removeTotal())
      openNotification()
      navigate("/")
    }
  return(
    <div className=' fixed bottom-3 bg-white shadow-md w-full transition-all duration-200 h-[5vh] z-[1000] '>
       {contextHolder}
       <div className=' flex items-center justify-around'>
         
         <div onClick={()=>setOpen(!open)}>
           <BiCart className='w-8 h-8'/>
           <div className='text-sm font-semibold text-red-500 text-center'>{formattedTotal}</div>
         </div>
       </div>
       {open &&
         <Dialog open={open} setClose={setClose}>
            <form onSubmit={SubmitHandle(HandleSubmit)}>
              <div className="mb-4">
                <label htmlFor="loginEmail" className="block text-gray-700 text-sm font-bold mb-2">
                 Tên
                </label>
                <input
                  type="text"
                  id="loginEmail"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nhập Tên"
                  required
                  {...Submit('name')}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="loginPassword" className="block text-gray-700 text-sm font-bold mb-2">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  id="loginPassword"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Số điện thoại"
                  required
                  {...Submit('tele')}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="loginPassword" className="block text-gray-700 text-sm font-bold mb-2">
                  Địa chỉ
                </label>
                <input
                  type="text"
                  id="loginPassword"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nhập địa chỉ"
                  required
                  {...Submit('address')}
                />
              </div>
              <div className=' flex items-center justify-end my-5'>Tổng tiền : <div className='text-sm font-semibold text-red-500 text-center'>{formattedTotal}</div> </div>
              <button
               type='Submit'
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Submit
              </button>
            </form>
         </Dialog> 
       }
    </div>
  )
}
export default Cart
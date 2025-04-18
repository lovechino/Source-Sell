import { HiBars3BottomRight } from "react-icons/hi2"
import { navLinks } from "./Items"
import { lazy, useEffect, useState } from "react"
import { FaShoppingCart } from "react-icons/fa";


import { Link } from "react-router-dom";
 const Navbar = ({openNav})=>{
  const Dialog = lazy(()=>import("../Dialog/Dialog"))
  const AuthForm = lazy(()=>import("../Auth"))
  const[navBg,setNavBg] = useState(false)
  useEffect(()=>{
    const handler = ()=>{
      if(window.scrollY >=90) setNavBg(true)
      if(window.scrollY < 90) setNavBg(false)
    }
  window.addEventListener('scroll',handler)
  return ()=>{
    window.removeEventListener('scroll',handler)
  }
  },[])
  const[openauth,setOpen] = useState(false)
  const SetClose = ()=>{
    setOpen(false)
  }
    return(
        <div className={` fixed ${navBg ? "bg-white shadow-md" : ""} w-full transition-all duration-200 h-[12vh] z-[1000]`}>
            <div className=" flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
                <h1>Home</h1>
                <div className=" hidden lg:flex items-center space-x-10">
                    {
                        navLinks.map((item)=>(
                            <a key={item.id} href= {item.url}>{item.label}</a>
                        ))
                    }
                </div>
                <div className=' flex items-center space-x-4'>
                    <button onClick={()=>setOpen(!openauth)}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-md focus:outline-none focus:shadow-outline text-sm flex items-center">Login/Register</button>
                     <Link to= "/cart"> <FaShoppingCart className="w-8 h-8"/> </Link>
                    <HiBars3BottomRight onClick={openNav} className=' w-8 h-8 cursor-pointer text-black lg:hidden'/>
                </div>
                {openauth && <Dialog open={openauth} setClose={SetClose}>
                    <AuthForm/>
                  </Dialog>}
            </div>
        </div>
    )
}

export default Navbar
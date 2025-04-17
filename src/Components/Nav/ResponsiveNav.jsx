import { useState } from "react"
import Navbar from "./Navbar"
import MobileNav from "./MobileNav"

const ResponsiveNav = () => {
    const[showNav,setShowNav] = useState(false)
    const handleNavShow = ()=>{
      setShowNav(true)
    }
    const handleNavHide = ()=>{
      setShowNav(false)
    }
    return (
      <div>
          <Navbar openNav = {handleNavShow}/>
          <MobileNav showNav = {showNav} closeNav = {handleNavHide}/>
      </div>
    )
  }
  
  export default ResponsiveNav
import React from 'react'
import { CgClose } from 'react-icons/cg'
import { navLinks } from './Items'

const MobileNav = ({closeNav,showNav}) => {
    const navOpen = showNav? " translate-x-0" : "translate-x-[-100%]"
  return (
    <div className= {`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1000] bg-black opacity-70 w-full h-screen`}>
      <div className= {`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-x-6 z-[10006]`}>
      {navLinks.map((item)=>{
                return (
                  <a href= {item.url} key={item.id}><p className='text-white text-[20px] ml-12 pb-1 sm:text-[30px]'>{item.label}</p></a>
                )
              })}
      <CgClose onClick={closeNav} className=' absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' />
      </div>
    </div>
  )
}

export default MobileNav
import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-white py-10'>
        <div className=' w-[90%] mx-auto px-4 sm:px-6 lg:px-8'>
            <div className=' grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8'>
           <div>
           <h2 className=' text-xl md:text-2xl font-bold'>
            <span className=' text-3xl md:text-4xl text-pink-700'>N</span>ame
            </h2>
            <p className=' mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-600'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, porro.
            </p>
           </div>
            <div>
                <h3 className=' text-lg font-semibold text-gray-300'>About Us</h3>
                <ul className=' mt-4 space-y-4 text-sm font-semibold text-gray-500'>
                    <li>Support Center</li>
                    <li>Customer Support</li>
                    <li>About Us</li>
                    <li>Copyright</li>
                    <li>Popular Campain</li>
                </ul>
            </div>
            <div>
                <h3 className=' text-lg font-semibold text-gray-300'>Our Information</h3>
                <ul className=' mt-4 space-y-4 text-sm font-semibold text-gray-500'>
                    <li>Return Policy</li>
                    <li>Privacy Policy</li>
                    <li>Terms</li>
                    <li>Site Map</li>
                </ul>
            </div>
            <div>
                <h3 className=' text-lg font-semibold text-gray-300'>Contact Info</h3>
                <ul className=' mt-4 space-y-4 text-sm font-semibold text-gray-500'>
                    <li>Return Policy</li>
                    <li>Privacy Policy</li>
                    <li>Terms</li>
                    <li>Site Map</li>
                </ul>
            </div>
         </div> 
        </div>
    </div>
  )
}

export default Footer
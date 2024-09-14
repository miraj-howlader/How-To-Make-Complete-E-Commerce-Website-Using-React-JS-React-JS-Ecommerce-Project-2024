import React from 'react'

import { assets } from '../assets/assets'
const Footer = () => {
  return (
   <div className=' flex flex-col text-center'>
     <div className=' flex flex-col sm:grid
     grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
      <div className=' flex  flex-col  items-center'>
        <img className=' mb-5 w-32 ' src={assets.logo} alt="" />
        <p className=' w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur odio, facilis placeat dicta error adipisci recusandae architecto quo. A illum cum voluptas modi, odio ut?</p>
      </div>

      <div>
        <p  className=' text-xl font-medium mb-5'>COMPANY</p>
        <ul className='cursor-pointer flex flex-col gap-1 text-gray-500'>
            <li>Home</li>
            <li>Abou us</li>
            <li>Delivery</li>
            <li>Privacy & Policy</li>
        </ul>
      </div>

      <div>
        <p className=' text-xl font-mono mb-5'>GET IN TOUCH</p>
      <ul className=' flex flex-col gap-1 text-gray-500'>
        <li>+880 1731 458 068</li>
        <li>mirajhowlader9999@gmail.com</li>
      </ul>
      </div>
    </div>

    <div>
        <hr />
        <p className=' py-5 text-sm text-center'>&copy; 2024. All right reserved.</p>
    </div>
   </div>
  )
}

export default Footer

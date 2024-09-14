import React from 'react'
import Title from '../component/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../component/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className=' text-2xl text-center pt-8
       border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className=' my-10 flex flex-col md:flex-row
       gap-16'>
        <img className=' w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className=' flex flex-col justify-center
       gap-6 md:w-2/4 text-gray-700'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, dolor. Dolor atque expedita sequi aut porro error, consectetur ratione possimus incidunt nemo quibusdam deserunt aspernatur ab nostrum? Velit eaque, officiis nihil atque, accusamus placeat perspiciatis error illo laudantium repudiandae quibusdam porro illum aliquid eos a saepe. Necessitatibus earum impedit quia, suscipit deserunt eveniet, laudantium ad neque et molestias unde blanditiis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati itaque id ea ad perferendis animi nesciunt tenetur dolorum provident corporis consequuntur iusto excepturi consectetur porro molestias voluptatum quia, enim fugit tempore harum ab temporibus. Rerum, officia aliquam. Earum, corrupti doloribus?</p>
        <b className=' text-gray-800'>Our Mission</b>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae molestias quisquam tempora suscipit? Vero asperiores velit ipsa molestias doloribus et eligendi tempore inventore adipisci, ipsam similique, animi vel officia?</p>
      </div>
      </div>

      <div className=' text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className=' flex flex-col md:flex-row
       text-sm mb-20'>
        <div className=' border px-10 md:px-16
         py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptatibus accusantium nobis vel repudiandae in laborum adipisci quod porro provident!</p>

        </div>

        <div className=' border px-10 md:px-16
         py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptatibus accusantium nobis vel repudiandae in laborum adipisci quod porro provident!</p>

        </div>
        <div className=' border px-10 md:px-16
         py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptatibus accusantium nobis vel repudiandae in laborum adipisci quod porro provident!</p>

        </div>

      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About

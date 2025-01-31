import React from 'react'

const NewsLetterBox = () => {
    const onsubmitHandler = (event) => {
        event.preventDefault()
    }
  return (
    <div className=' text-center'>
        <p className=' text-2xl font-medium
         text-gray-800'>Subscribe now and get 20% off</p>
      <p className=' text-gray-400 mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, reiciendis.</p>
    <form
    onSubmit={onsubmitHandler}
 className=' w-full sm:w-1/2 flex items-center gap-4
     m-auto border  my-6 py-3'>
        <input className=' ml-4 w-full sm:flex-1 outline-none' type="email" placeholder='Email' required/>
    <button type='submit' className=' bg-black text-white text-xs
     px-10 py-4'>SUBSCRIBE</button>
    </form>
    </div>
  )
}

export default NewsLetterBox

import React from 'react'

function Slider() {
  return (
    <div className='w-full h-[350px] md:h-[600px] text-center flex justify-center items-center'>
        <div className='animate-bounce'>
            <h2 className='text-[50px] md:text-[100px] mb-4 font-bold uppercase text-black'>eggcellect</h2>
            <a href='#' className='bg-orange-400 border-2 hover:border-orange-400 md:bg-green-700 px-6 py-4 text-white font-semibold md:text-2xl rounded-full md:px-8 md:py-6 md:hover:border-2 md:hover:border-green-400 hover:bg-white hover:text-black transition ease-linear duration-500'>
            Order Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                
            </a>
        </div>
    </div>
  )
}

export default Slider
import React from 'react'

function About() {
  return (
    <div className='w-full text-center bg-black'>
        <h1 className='text-white text-3xl tracking-wider pt-6'>About Us</h1>
        <div className='flex flex-wrap justify-between mx-2 items-center md:px-10 md:py-4'>
            <p className='text-left md:text-right text-sm md:w-[900px] mx-4 md:text-lg md:mx-4 overflow-clip'>
                A paragraph contains a group of sentences intertwined with each other to discuss, or debate, or explain a central idea. It conventionally begins with an indented line. A beginner writer or a student usually starts writing a paragraph having seven sentences, while some professors of composition advise beginners to start with nine sentences, and some others ask them to start with eleven sentences. Some, however, teach all three paragraph types step by step.

            </p>
            <div className='m-auto'>
                <img src={process.env.PUBLIC_URL + 'images/about.jpg'} className=' w-[200px] h-[200px] rounded-full m-4' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default About
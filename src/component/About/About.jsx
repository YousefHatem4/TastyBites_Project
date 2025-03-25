import React from 'react'

export default function About() {
  return <>
     <div className='bg-[#222831] min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto md:flex items-center'>
        <div className='md:w-1/2 mb-8 md:mb-0'>
          <img 
            src="/src/assets/about-img.png"  // Adjusted path (assuming public/assets folder)
            alt="About Feane" 
            className='w-110 h-auto '
          />
        </div>
        <div className='md:w-1/2 text-white'>
          <h2 className='home-font text-4xl sm:text-5xl font-bold mb-6'>We Are Feane</h2>
          <p className='text-base sm:text-lg mb-6 leading-relaxed'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
          </p>
          <button
            type="button"
            className="text-white bg-[#FFBE33] hover:bg-[#d99e1f] cursor-pointer rounded-full px-8 sm:px-10 py-2 sm:py-3 focus:ring-4 focus:outline-none font-medium text-sm sm:text-base transition duration-300"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  </>
}

"use client";
import React from 'react'
function Footer() {
  return (
     <div className='w-full mt-20 text-white'>
       <div className='max-w-screen-xl mx-auto flex flex-row max-md:flex-col  gap-10 py-10 ' >
          <div className='basis-1/2' >
            <h1 className='font-semibold text-[8rem] leading-none tracking-tight ' >faceTrace</h1>
          </div>
          <div className='basis-1/2 flex flex-row max-md:flex-col max-md:mx-8 max-md:text-3xl  gap-10'>
          <div>
            <h1  className='text-zinc-700 max-md:text-3xl'>Socials</h1>
            <ul  className='text-zinc-700 max-md:text-3xl'>
              <li>Instagram</li>
             <li>Twitter</li>
             <li>LinkedIn</li>
            </ul>
          </div>
          <div className='max-md:text-3xl'>
            <p>123-456-7890</p>
            <p>info@facetrace.com</p>
            <p>500 Street Road,San Frachisco</p>
          </div>
          <div>
             <p className='font-semibold text-sm'>FaceTrace helps to detect face inside video.</p>
          </div>
          </div>
       </div>
    </div>
  )
}

export default Footer

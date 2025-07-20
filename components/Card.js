"use client";
import React from 'react'
import Image from 'next/image'

function Card({heading,description,logo
}) {
  return (
    <div className='bg-white w-120 rounded-lg  max-md:w-[90%] shadow-xl shadow-amber-600  px-4 py-4  text-blue-950 flex flex-col' >
        <div className='flex flex-row justify-between'>
     <h1>{heading}</h1>
      <Image src={logo} alt='logo'></Image>
        </div>
      <p>{description}</p>
    </div>
  )
}

export default Card

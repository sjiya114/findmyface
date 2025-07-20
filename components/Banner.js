'use client';

import React from 'react'
import Image from 'next/image'
import banner from '../public/assets/banner.png';
import { useRouter } from 'next/navigation';

function Banner()
{
  const router=useRouter();
  return (
    <div className='flex flex-row max-md:flex-col max-md:w-full max-md:mx-10'>
       <Image src={banner} alt='banner_img' className='w-100 h-100 shadow-2xl shadow-amber-50 mx-40 max-md:mx-2 rounded-lg ' ></Image>
       <button  onClick={()=>router.push("/video")}  className='bg-blue-950 text-white px-4 py-2 w-fit h-fit items-center mt-40 max-md:mt-10 rounded-lg'  >To Record Video Click here</button>
    </div>
  )
}

export default Banner

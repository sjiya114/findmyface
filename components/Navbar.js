"use client";
import React, { use } from 'react'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/assets/logo.png'
import crossicon from '../public/assets/cross_icon.png';
import menu_icon from '../public/assets/menu_icon.svg';
function Navbar() {
  const [hidden,setHidden]=useState(true);
  // const [token,setToken]=useState(true);
  const [menu,setMenu]=useState(false);
  const [open,setOpen]=useState(false);
  return (
     <>
    <div className='flex max-md:hidden min-lg:visible    items-center max-md:px-10 max-md:right-10 bg-white rounded-lg mt-4 px-4 hover:border-indigo-900 hover:text-white max-md:left-10 max-sm:flex-col  max-sm:space-y-4 justify-between mb-5 py-4 fixed top-0 right-20 left-20 border-b-2  shadow-2xl shadow-black/60 border-b-gray-400   '>
        <div  className='flex flex-row justify-between'>
          <Image src={logo} className='cursor-pointer w-20 h-20' alt=""    ></Image>
        </div>
      < ul className='flex flex-col min-md:flex-row max-sm:space-y-4 space-x-6 text-blue-900 font-bold text-xl'>
      <Link  href="/" >
        <li >Home</li>
        <hr className='w-0.8 h-0.5 bg-black' />
      </Link>
      <Link href="/" >
        <li>Benefits</li>
        <hr className='w-0.8 h-0.5 bg-black' />
      </Link>
      <Link href="/">
        <li>Feature</li>
        <hr className='w-0.8 h-0.5 bg-black' />
      </Link>
      <Link href="/">
        <li>Contact</li>
        <hr className='w-0.8 h-0.5 bg-black' />
      </Link>
     
      </ul>
        </div>
        <div className='flex flex-col   md:hidden  rounded-lg mt-4 px-4 hover:border-indigo-900 hover:text-white justify-between mb-5 py-4 fixed top-0 right-10 left-10 bg-white border-b-2  shadow-2xl shadow-black/60 border-b-gray-400   '>
        <div className='flex  flex-row justify-between'>
            <Image src={logo} className='cursor-pointer w-20 h-20' alt="img"    ></Image>
             <Image src={hidden?menu_icon:crossicon}  onClick={()=>{setHidden(!hidden)}} className='w-8 h-8 mt-2' alt="img"></Image>
        </div>
        {!hidden  && < ul className='flex flex-col bg-white  items-center space-y-4  text-blue-900 font-bold text-xl'>
        <Link  href="/" >
        <li >Home</li>
        <hr className='w-0.8 h-0.5 bg-black' />
      </Link>
      <Link href="/" >
        <li>Benefits</li>
        <hr className='w-0.8 h-0.5 bg-black' />
      </Link>
      <Link href="/">
        <li>Feature</li>
        <hr className='w-0.8 h-0.5 bg-black' />
      </Link>
      <Link href="/">
        <li>Contact</li>
        <hr className='w-0.8 h-0.5 bg-black' />
      </Link>
      </ul>
}
            
             </div> 
           </>
  )
}

export default Navbar

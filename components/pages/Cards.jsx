"use client";
import React from 'react'
import browser from '../..//public/assets/browser.png';
import live from '../..//public/assets/live.png';
import privacy from '../..//public/assets/privacy.png';
import video from '../..//public/assets/video.png';
import storage from '../..//public/assets/storage.png';
import Card from '../Card';


function Cards() {
    var cards=[{heading:"Live Face Tracking",description:"Seamlessly track facial movements using AI-powered technology. Our system places a dynamic marker over the user's face as they move.",
        logo:live},
        {heading:"Video Recording",description:"Start recording high-quality videos with face tracking overlays. Easily save videos for later use or review.",
            logo:video},
        {heading:"Local Storage",description:"our recordings are saved locally on your device—no cloud needed. Retain full control over your data",
            logo:storage},
        {heading:"Privacy First",description:"We never upload your face or videos to the cloud. Everything happens directly in your browser.",
            logo:privacy},
        {heading:"Cross-Platform",description:"Use Face Trace on any device with a browser. No installation required—mobile-friendly and desktop-ready.",
            logo:browser},
    ]
  return (
    <div className='max-w-screen-xl mx-auto mt-20 max-md:space-y-4 max-md:w-full   max-md:mx-10   flex flex-row flex-wrap space-x-4 space-y-4    '>
      {cards.map((card,index)=>(
        <Card heading={card.heading} key={index} description={card.description} logo={card.logo} />)
      )}
    </div>
  )
}

export default Cards

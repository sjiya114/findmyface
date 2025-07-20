"use client";
import React, { useState } from 'react'
import { useRef } from 'react';
import Image from 'next/image';
import start from '../../public/assets/start.png';
import stop from '../../public/assets/stop.png';
function page() {
  const videoRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

    const startRecording=async(e)=>
    {
        let chunks=[];
        console.log("started recording");
        const startbutton=document.getElementById("strbtn");
        const endbutton=document.getElementById("endbtn");
        //grant access to camera using navigator (browser api)
        const mediaStreamObj=await  navigator.mediaDevices.getUserMedia({
            audio:true,
            video:true
        });
            document.getElementById("videobox").srcObject=mediaStreamObj;
            startbutton.disabled=true;
            const mediaRec=new MediaRecorder(mediaStreamObj);
            mediaRecorderRef.current=mediaRec;
            window.MediaStream=mediaRecorderRef;
             chunksRef.current=[];
            mediaRec.ondataavailable = (e) => {
        chunksRef.current.push(e.data);
      };

           mediaRec.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "video/mp4" });
        const videoURL = URL.createObjectURL(blob);

        const recordedVideo = document.createElement("video");
        recordedVideo.controls = true;
        recordedVideo.src = videoURL;
        recordedVideo.width=800;
        recordedVideo.height=400;
        document.getElementById("videorecorder").appendChild(recordedVideo);

        chunksRef.current = [];
      };
      mediaRec.start();
      startbutton.disabled = true;
      endbutton.disabled = false;
    }
    const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
      if (videoRef.current) {
    videoRef.current.pause(); // Pause video
    videoRef.current.srcObject = null; // Clear frozen frame
  }
    document.getElementById("strbtn").disabled = false;
    document.getElementById("endbtn").disabled = true;
  };
  return (
    <div>
      <h1 className='text-5xl mt-10 text-center font-bold font-serif text-cyan-950'>Welcome User</h1>
      <div id='videorecorder' className='flex flex-col gap-10  max-md:mx-12 mx-[30vw]'  >
         <video id='videobox' ref={videoRef} autoPlay className=' w-200 bg-zinc-900  mt-20 h-100 ' >
                
         </video>
         <div className='flex flex-row justify-between  mt-10'>
        <button id='strbtn' onClick={()=>startRecording()}  className='rounded-full bg-red-600 w-8 h-8 px-2 py-2' > <Image src={start} alt="start" ></Image>   </button>
        <button id='endbtn' onClick={()=>stopRecording()}  className='rounded-full bg-red-600 w-8 h-8 px-2 py-2'><Image src={stop} alt="stop" ></Image>  </button>
        {/* <button className='rounded-full bg-red-600 w-6 h-6'>   </button> */}
        </div>
      </div>
        
      </div>
  )
}

export default page

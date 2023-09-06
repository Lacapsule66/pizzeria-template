import Image from 'next/image'
import React from 'react'

export default function Firts() {
  return (
    <div className='h-[100vh] flex max-md:flex-col'>
        <div className='lg:w-1/2 h-full flex justify-center mx-6 items-center  max-sm:mt-36 '> <h1
              id="scaleH1"
              className=" scale-[50%] heading2 lg:text-8xl text-6xl text-center  staat tracking-wide "
            >
              Pizzeria <br /><span className="rock"> au </span>feux
               de bois <br />
            
              
              Perpignan.{" "}
            </h1></div>
        <div className='   lg:w-1/2 h-full flex justify-center items-center rounded-2xl'>
          <Image id='image' className='lg:w-1/2  max-md:scale-125 rounded-2xl' quality={100} style={{width : "66%", height:"66%", objectFit:"cover"}} src={"/pizza2.jpeg"} width={500} height={500} />
        </div>
    </div>
  )
}

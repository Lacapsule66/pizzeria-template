import React from 'react'
import { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
export default function Carte() {
  return (
    <div className="   py-12 z-50 bg-[#0f0f0f] relative  flex justify-center items-center flex-col">
      <h2 className='staat heading2 text-8xl mb-6'>Nos Pizzas</h2>
    <div className=" grid lg:grid-cols-3 lg:grid-rows-2 grid-cols-1 gap-12 h-[95%] w-[80%]">
      
    <div className="flex flex-col pizza justify-center items-center shadow-neon-pink rounded-3xl pb-6 ">
        <Image

          src="/pizza4.jpeg"
          alt="pizza"
          width={300}
          height={300}
          className="rounded-3xl"
          style={{width:'100%'}}
        />
        <h3 className="text-white text-4xl mt-6">4 Fromages</h3>

        <p className="text-white text-center text-2xl mt-6 ">
          Mozzarella, chèvre, gorgonzola, emmental
        </p>

        <button className="bg-white text-[#ff5c7d] text-2xl mt-6 px-6 py-2 rounded-full">
          Commander
        </button>

        </div>
        <div className="flex flex-col pizza justify-center items-center shadow-neon-pink rounded-3xl pb-6 ">
        <Image

          src="/pizza4.jpeg"
          alt="pizza"
          width={300}
          height={300}
          className="rounded-3xl"
          style={{width:'100%'}}
        />
        <h3 className="text-white text-4xl mt-6">4 Fromages</h3>

        <p className="text-white text-center text-2xl mt-6 ">
          Mozzarella, chèvre, gorgonzola, emmental
        </p>

        <button className="bg-white text-[#ff5c7d] text-2xl mt-6 px-6 py-2 rounded-full">
          Commander
        </button>

        </div>
        <div className="flex flex-col pizza justify-center items-center shadow-neon-pink rounded-3xl pb-6 ">
        <Image

          src="/pizza4.jpeg"
          alt="pizza"
          width={300}
          height={300}
          className="rounded-3xl"
          style={{width:'100%'}}
        />
        <h3 className="text-white text-4xl mt-6">4 Fromages</h3>

        <p className="text-white text-center text-2xl mt-6 ">
          Mozzarella, chèvre, gorgonzola, emmental
        </p>

        <button className="bg-white text-[#ff5c7d] text-2xl mt-6 px-6 py-2 rounded-full">
          Commander
        </button>

        </div>
        <div className="flex flex-col pizza justify-center items-center shadow-neon-pink rounded-3xl pb-6 ">
        <Image

          src="/pizza4.jpeg"
          alt="pizza"
          width={300}
          height={300}
          className="rounded-3xl"
          style={{width:'100%'}}
        />
        <h3 className="text-white text-4xl mt-6">4 Fromages</h3>

        <p className="text-white text-center text-2xl mt-6 ">
          Mozzarella, chèvre, gorgonzola, emmental
        </p>

        <button className="bg-white  text-[#ff5c7d] text-2xl mt-6 px-6 py-2 rounded-full">
          Commander
        </button>

        </div>
        <div className="flex flex-col pizza justify-center items-center shadow-neon-pink rounded-3xl pb-6 ">
        <Image

          src="/pizza4.jpeg"
          alt="pizza"
          width={300}
          height={300}
          className="rounded-3xl"
          style={{width:'100%'}}
        />
        <h3 className="text-white text-4xl mt-6">4 Fromages</h3>

        <p className="text-white text-center text-2xl mt-6 ">
          Mozzarella, chèvre, gorgonzola, emmental
        </p>

        <button className="bg-white text-[#ff5c7d] text-2xl mt-6 px-6 py-2 rounded-full">
          Commander
        </button>

        </div>
        <div className="flex flex-col pizza justify-center items-center shadow-neon-pink rounded-3xl pb-6 ">
        <Image

          src="/pizza4.jpeg"
          alt="pizza"
          width={300}
          height={300}
          className="rounded-3xl"
          style={{width:'100%'}}
        />
        <h3 className="text-white text-4xl mt-6">4 Fromages</h3>

        <p className="text-white text-center text-2xl mt-6 ">
          Mozzarella, chèvre, gorgonzola, emmental
        </p>

        <button className="bg-white text-[#ff5c7d] text-2xl mt-6 px-6 py-2 rounded-full">
          Commander
        </button>

        </div>
   
    
    </div>
  </div>
  )
}

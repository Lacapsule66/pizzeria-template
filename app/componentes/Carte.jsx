import React from 'react'
import { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
export default function Carte() {
  return (
    <div className="h-[150vh]  flex justify-center items-center flex-col">
      <h2 className='staat heading2 text-8xl mb-6'>Nos Pizzas</h2>
    <div className=" grid lg:grid-cols-3 lg:grid-rows-2 grid-cols-1 gap-12 h-[95%] w-[80%]">
      <div className="grid-item pizza col-span-1 row-span-1 bg-red-500 rounded-xl relative ">
      <Image
          className="w-1/2 h-[20vh] rounded-xl absolute top-0 "
          quality={100}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={"/pizza4.jpeg"}
          width={500}
          height={500}
        />
        <p className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  z-10 staat text-white text-4xl">
          Margarita
        </p>
      </div>
      <div className="grid-item pizza col-span-1 row-span-1 bg-red-500 rounded-xl relative ">
      <Image
          className="w-1/2 h-[20vh] rounded-xl absolute top-0 "
          quality={100}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={"/pizza4.jpeg"}
          width={500}
          height={500}
        />
        <p className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  z-10 staat text-white text-4xl">
          4 Fromages
        </p>
      </div>
      <div className="grid-item  pizza col-span-1 row-span-1 bg-red-500 rounded-xl relative ">
      <Image
          className="w-1/2 h-[20vh] rounded-xl absolute top-0 "
          quality={100}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={"/pizza4.jpeg"}
          width={500}
          height={500}
        />
        <p className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  z-10 staat text-white text-4xl">
          Margarita
        </p>
      </div>
      <div className="grid-item pizza col-span-1 row-span-1 bg-red-500 rounded-xl relative ">
      <Image
          className="w-1/2 h-[20vh] rounded-xl absolute top-0 "
          quality={100}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={"/pizza4.jpeg"}
          width={500}
          height={500}
        />
        <p className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  z-10 staat text-white text-4xl">
          Margarita
        </p>
      </div>
      <div className="grid-item pizza col-span-1 row-span-1 bg-red-500 rounded-xl relative ">
      <Image
          className="w-1/2 h-[20vh] rounded-xl absolute top-0 "
          quality={100}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={"/pizza4.jpeg"}
          width={500}
          height={500}
        />
        <p className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  z-10 staat text-white text-4xl">
          Margarita
        </p>
      </div>
      <div className="grid-item pizza col-span-1 row-span-1 bg-red-500 rounded-xl relative ">
        <Image
          className="w-1/2 h-[20vh] rounded-xl absolute top-0 "
          quality={100}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={"/pizza4.jpeg"}
          width={500}
          height={500}
        />
        <p className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  z-10 staat text-white text-4xl">
          Margarita
        </p>
      </div>
    </div>
  </div>
  )
}

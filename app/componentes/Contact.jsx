import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  useEffect(() => {
    gsap.to("#reveal1", {
      x: "-100%",
      duration: 1.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#reveal1",
        start: "top center",
        end: "bottom 100px",
      },
    });
  }, []);
  return (
    <div className="  h-[150vh] bg-red-500">
      <h3 className=" text-center  m-6  heading2 staat text-6xl">
        Nous Contacter
      </h3>

      <div className="flex justify-center h-64  relative ">
        <img
          id="rotate"
          src="/pizza.png"
          alt=""
          className="absolute h-64 w-64 object-cover "
        />
        <h2 className="staat text-6xl lg:text-8xl absolute z-10">
          06 10 20 30 40
        </h2>
      </div>
      <div>
        <div className="h-full w-screen flex flex-col items-center justify-center relative mb-24">
          <div
            id="reveal1"
            className="bg-red-500 h-full w-screen absolute top-0 z-40"
          ></div>
          <iframe className=""
            src="https://www.google.com/maps/embed/v1/place?q=nicolas%20condette&key=AIzaSyAXNW1ZqiVoRoArpexEfvqYhOEAQ54g4js"
            style={{
              width: "80%",
              height: "450px",
            }}
            loading="lazy"
          ></iframe>
       <p className="  text-center text-white mt-6 staat text-3xl">Adresse : 1 Rue de la Libération, 66300 TROUILLAS</p>
        <img src="/pizzaiolo.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
}

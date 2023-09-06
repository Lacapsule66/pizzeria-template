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
    gsap.to("#pizzaiolo", {
      height: "100vh",
      duration: 1.3,
      ease: "power2.out",
      toggleActions: "restart none none none",

      scrub: 1,
      
      objectFit: "cover",
      scrollTrigger: {
        trigger: "#pizzaiolo",
        start: "top center",
        end: "bottom 100px",

        
      
        },
        });
  }, []);
  return (
    <div id="ok2" className="bg-[#0f0f0f]   ">
      <h3 className=" text-center  m-6  heading2 staat text-6xl">
        Nous Contacter
      </h3>

      <div className="flex justify-center h-[50vh] items-center  relative ">
        <img
          id="rotate"
          src="/pizza.png"
          alt=""
          className="absolute h-64 w-64 object-cover "
        />
        <h2 className="staat text-white text-6xl lg:text-8xl absolute z-10">
          06 10 20 30 40
        </h2>
        
      </div>
      <p className="  text-center text-white mt-6 staat text-3xl">Adresse : 1 Rue de la Libération, 66300 TROUILLAS</p>

      <div>
        <div className="h-full w-screen flex flex-col items-center justify-center relative mb-24">
          {/* <div
            id="reveal1"
            className="bg-red-500 h-full w-screen absolute top-0 z-40"
          ></div> */}
          <iframe className=""
            src="https://www.google.com/maps/embed/v1/place?q=nicolas%20condette&key=AIzaSyAXNW1ZqiVoRoArpexEfvqYhOEAQ54g4js"
            style={{
              width: "100%",
              height: "450px",
            }}
            loading="lazy"
          ></iframe>
        <img id="pizzaiolo" src="/pizzaiolo.jpeg" className=" mt-6 rounded-3xl" alt="" />
        </div>
      </div>
    </div>
  );
}

import React, { useRef } from "react";
import { useEffect } from "react";
import gsap from "gsap";


export default function Anim() {

const videoRef = useRef(null);

    useEffect(() => {
     // if video is full loaded, play it
   
      // videoRef.current.pause();

     const tl = gsap.timeline();
    //   tl.to("#ok3", {
    //     delay: 0.3,
    //     duration: 0.3,
    //     y: "-100%",
    //     // onComplete: () => {
    //     //   videoRef.current.play();
    //     // }
        
    //   })

        tl.to("#ok1", {
          delay: 0,
            duration: 0.7,
            y: "-100%"
        } ,)
        tl.to("#ok", {
            duration: .5,
            y: "-100%"
        }, .3)
        tl.to("#ok5", {
          duration: .7,
          y: "-100%"
      }, .4)

        tl.to("#ok4", {
          duration: .7,
          y: "-100%"
      }, 0.7)
      tl.to("#scaleH1", {
        
        duration: 0.8,
        scale: 1,
        ease: "elastic.out(4, 0.7)",
      });
     tl.fromTo( '#image', {
        opacity: 0,
        y: 100,
        },
        {
        
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
        } ,1.7)
      

      
    }, []);

    


  return (
    <>
    {/* <div id="ok3" className="bg-black h-screen w-screen absolute top-0 z-[100]"></div> */}
      <div id="ok1" className="bg-[#222223] h-screen w-screen fixed top-0 z-[120]" >
      </div>
      <div id="ok" className="bg-[#009246] absolute w-screen h-screen z-[110]"></div>
      <div id="ok5" className="bg-[#ffffff] absolute w-screen h-screen z-[100]"></div>
      <div id="ok4" className="bg-[#ce2b37] absolute w-screen h-screen z-[90]"></div>
    </>
  );
}

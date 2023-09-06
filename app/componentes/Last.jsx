"use client"
import React from 'react'
import { useEffect } from 'react'
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function Last() {
  useEffect(() => {
    const split2 = new SplitText("#split2", { type: "chars, words, lines" });
    const tl = gsap.timeline();
    tl.fromTo(
      split2.words,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.02,
        ease: "elastic.out(4, 0.7)",
        scrollTrigger: {
          trigger: "#split2",
          start: "top-=350  center",
          end: "bottom 100px",
          toggleActions: "restart none none none",
          scrub: 1,
        },
      }
    );
    tl.to(split2.chars, {
      delay: 0.5,
      color: "#ff5c7d",
      stagger: 0.03,
      ease: "elastic.out(4, 0.7)",
      scrollTrigger: {
        trigger: "#split2",
        start: "top center",
        end: "bottom 100px",
        toggleActions: "restart none none none",
        scrub: 1,
 
      },
    });


  
  }, [])
  return (
    <div className='h-[150vh] lg:h-[300] -z-10 sticky top-0  flex justify-center  w-full'>
<div id="split2" className="text-white staat h-[200vh] w-full mx-6  text-4xl lg:text-8xl flex  my-36  flex-col">
            <p>
           Nos pizzas sont faites avec des produits frais et de qualités dans le respect de la tradition italienne.
            </p>{" "}
            <p>
              {" "}
              Nous vous proposons une large gamme de pizzas, des plus classiques
              aux plus originales.
            </p>{" "}
            <p> Appelez nous pour commander !</p>
          </div>
    </div>
  )
}

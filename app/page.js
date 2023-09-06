"use client";
import Image from "next/image";
import Firts from "./componentes/Firts";
import Last from "./componentes/Last";
import { useEffect } from "react";
import { gsap } from "gsap";
import Carte from "./componentes/Carte";
import Contact from "./componentes/Contact";
import Anim from "./componentes/Anim";
import Footer from "./componentes/Footer";

export default function Home() {
  useEffect(() => {
    // gsap.to(".pizza", {
    //   scrollTrigger: {
    //     trigger: ".pizza",
    //     start: "top center",
    //     end: "bottom 100px",
    //     toggleActions: "restart none none none",
    //     scrub: 1,
    //     },
    //     y: 100,
    //     stagger: 0.2,
    //     duration: 1,
    //     ease: "elastic.out(1, 0.3)",
    // });

    gsap.from("#rotate", {
      duration: 11,
      rotate: 360,
      ease: "linear",
      repeat: -1,
    });
    gsap.fromTo(
      ".pizza",
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        scrollTrigger: {
          trigger: ".pizza",
          start: "top center",
          end: "bottom 200px",
          toggleActions: "restart none none none",
          scrub: 1,
         
        },
        opacity: 1,
        scale: 1,
        stagger: 0.7,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      }
    );
  }, []);

  return (
    <>
      <Anim />
      <Firts />
      <Last />
      <Carte />
      <Contact />
      <Footer />
    </>
  );
}

import { useState, useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { StyledSubHero } from "./SubHeroStyles";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
const SubHero = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".hry",
          start: "top bottom",
          end: " +=300",
          //   scrub: true,

        }
      })
      .from(".hry", { y: -100, ease: Power3.easeOut, duration: 3 })
      .from(
        "button",
        {
          y: +100,
          ease: Power3.easeOut,
          duration: 3
        },
        "-=2"
      );
  });
  return (
    <StyledSubHero ref={ref} className="gsap">
      <h2 className="hry">Shop full collection on Opensea</h2>
      <Link href="https://opensea.io/collection/keemthedj">
        <button className="market-btn"> Marketplace</button>
      </Link>
    </StyledSubHero>
  );
};

export default SubHero;

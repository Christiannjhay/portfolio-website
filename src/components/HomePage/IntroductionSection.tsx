import { useEffect, useRef, useState } from "react";
import AnimatedCard from "./AnimatedCard";

export default function IntroductionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrollOffset(scrollPos);
    };

    if (isVisible) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <div className="relative md:py-32 lg:py-48 w-full overflow-x-hidden flex justify-center">
      <div className="absolute inset-0 w-full h-full z-[1] overflow-hidden flex justify-center items-center">
        <AnimatedCard />
      </div>
      <div
        ref={sectionRef}
        className={`relative text-white mt-9 text-xl lg:text-4xl xl:text-5xl xl:w-3/4 font-GeomRegular text-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1
          ref={h1Ref}
          className="py-20 px-8 sm:px-24 lg:px-32 xl:px-10 leading-[2rem] z-20 lg:leading-[4rem] relative"
          style={{
            marginTop: scrollOffset > 0 ? `${-scrollOffset * 0.1}px` : "0px",
            transition: "margin-top 0.3s ease",
          }}
        >
          <h2 className="cursor-pointer gradient-text font-GeomSemiBold md:text-3xl lg:text-5xl">
            Hey! I'm Christian Sugarol, a Full Stack Developer from the
            Philippines, dedicated to building fast, high-quality projects.
          </h2>
        </h1>
      </div>
    </div>
  );
}

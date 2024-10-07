import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import UiUx from "./uiux";
import Tools from "./Tools";
import { useEffect, useRef, useState } from "react";

export default function TechStackSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
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

  return (
    <div
      className={`w-full p-10 md:p-14 lg:px-14 xl:px-48 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }  `}
      ref={sectionRef}
    >
      <div className="text-white font-GeomBold text-[2rem] md:text-[3rem]">
        <h1 className="underline-offset-[10px] underline decoration-red-500 decoration-[3.5px]">
          TECH STACK
        </h1>
      </div>
      <div className="flex flex-col md:flex-row pt-10 gap-3 ">
        <div className="w-full">
          <FrontEnd />
        </div>
        <div className="w-full ">
          <BackEnd />
        </div>
      </div>
      <div className=" flex flex-col md:flex-row pt-10 gap-3">
        <div className="w-full ">
          <UiUx />
        </div>
        <div className="w-full ">
          <Tools />
        </div>
      </div>
    </div>
  );
}

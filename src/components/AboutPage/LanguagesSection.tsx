import { useEffect, useRef, useState } from "react";
import Languages from "./Languages";

export default function LanguagesSection() {
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
      className={`w-full max-w-[1900px] mx-auto bg-[#0A0A0A] p-10 md:p-14 lg:px-14 xl:px-48 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      ref={sectionRef}
    >
      <div className="text-white font-GeomBold text-[2rem] md:text-[3rem]">
        <h1 className="underline-offset-[10px] underline decoration-red-500 decoration-[3.5px]">
          PROGRAMMING LANGUAGES
        </h1>
      </div>
      <div className="flex flex-col md:flex-row pt-10 gap-3 ">
        <div className="w-full">
          <Languages />
        </div>
      </div>
    </div>
  );
}

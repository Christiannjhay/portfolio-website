import { useEffect, useRef, useState } from "react";
import CardSlider from "./CardSlider";
import OppositeCardSlider from "./OppositeCardSlider";
import CardSliderThird from "./CardSliderThird";

export default function TakeAPeekSection() {
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
      className="w-full lg:pb-20 no-select relative flex flex-col items-center justify-center mb-10 overflow-hidden"
      ref={sectionRef}
    >
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full">
          <CardSlider />
        </div>

        <h1
          className={`text-white w-4/5 cursor-pointer select-none lg:w-3/5 absolute font-GeomBold text-2xl sm:text-4xl text-center transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Take a peek at how I transform concepts into fully functional
          solutions
        </h1>

        <div className="w-full">
          <OppositeCardSlider />
        </div>
        <div className="w-full">
        <CardSliderThird/>
        </div>
      </div>
    </div>
  );
}

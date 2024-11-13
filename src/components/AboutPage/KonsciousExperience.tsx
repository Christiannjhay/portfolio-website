import { useEffect, useRef, useState } from "react";

export default function KonsciousExperience() {
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
      className={`text-white flex flex-col gap-5 justify-start rounded-xl p-10 border-2 border-red-500 transition-all duration-1000 ${
        isVisible ? "w-full opacity-100" : "w-0 opacity-0"
      } overflow-hidden`}
      ref={sectionRef}
    >
      <div className="font-GeomBold text-lg">
        <h1>
          Konscious House of Brands | Junior Software Developer | Nov 2024 –
          Present
        </h1>
      </div>

      <div className="">
        <h1 className="font-GeomRegular text-red-500">
          Assisted in front-end development and Shopify theme customization
        </h1>
        <h2 className="font-GeomLight">
          ● Collaborated with senior developers to enhance front-end
          functionality and implement design improvements
        </h2>
        <h2 className="font-GeomLight">
          ● Customized and maintained Shopify themes using Liquid, JavaScript,
          HTML, and CSS
        </h2>
        <h2 className="font-GeomLight">
          ● Converted design assets into responsive code to ensure optimal user
          experience
        </h2>
        <h2 className="font-GeomLight">
          ● Participated in code reviews to contribute to code quality and
          project standards
        </h2>
      </div>
    </div>
  );
}

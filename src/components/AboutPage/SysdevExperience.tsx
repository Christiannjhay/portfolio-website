import { useEffect, useRef, useState } from "react";

export default function SysdevExperience() {
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
          Samahan Systems Development | Front End Developer | Aug 2022 – May
          2023
        </h1>
      </div>
      <div className="">
        <h1 className="font-GeomRegular text-red-500">
          Created UI/UX design for websites and apps
        </h1>
        <h2 className="font-GeomLight">
          ● Collaborated with org mates to create a web design for our projects
        </h2>
        <h2 className="font-GeomLight">
          ● Implemented best practices in UI/UX design, focusing on
          accessibility, usability, and visual appeal.
        </h2>
        <h2 className="font-GeomLight">
          ● Designed the UI/UX of the Samahan website to make it relevant and
          engaging for users.
        </h2>
      </div>
      <div className="">
        <h1 className="font-GeomRegular text-red-500">
          Created QR code attendance monitoring app
        </h1>
        <h2 className="font-GeomLight">
          ● Designed the UI/UX of the Mobile App
        </h2>
        <h2 className="font-GeomLight">
          ● Created the app using React Native and QR code Scanner package
        </h2>
        <h2 className="font-GeomLight">
          ● Connected the API and adjusted the configuration file for the
          backend
        </h2>
      </div>
    </div>
  );
}

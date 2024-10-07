import { useEffect, useRef, useState } from "react";

export default function InfosoftExperience() {
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
          Infosoft Consulting Corp |Full Stack Developer Intern | Feb 2024 – May
          2024
        </h1>
      </div>
      <div className="">
        <h1 className="font-GeomRegular text-red-500">
          Recreated the DTR website for the interns
        </h1>
        <h2 className="font-GeomLight">
          ● Managed to fix the responsiveness of the DTR for mobile devices
        </h2>
        <h2 className="font-GeomLight">
          ● Fixed issue allowing users to clock out after the day of clocking in
        </h2>
        <h2 className="font-GeomLight">
          ● Added functionality for interns to input tasks when clocking in or
          out
        </h2>
      </div>
      <div className="">
        <h1 className="font-GeomRegular text-red-500">
          Acumatica Certification Study and Implementation
        </h1>
        <h2 className="font-GeomLight">
          ● Studied Acumatica T190 to T270 courses, gaining comprehensive
          knowledge of the platform
        </h2>
        <h2 className="font-GeomLight">
          ● Implemented best practices and techniques learned from the T190 to
          T270 courses in
        </h2>
        <h2 className="font-GeomLight">
          ● Executed hands-on projects and practical exercises to solidify
          understanding and application of Acumatica features and
          functionalities
        </h2>
      </div>
      <div className="">
        <h1 className="font-GeomRegular text-red-500">
          Recreated Bogsy Construction Services in Acumatica Cloud ERP
        </h1>
        <h2 className="font-GeomLight">
          ● Developed customized solutions for Bogsy Construction services
          within the Acumatica platform
        </h2>
        <h2 className="font-GeomLight">
          ● Executed integration of various modules within Acumatica to
          streamline construction service processes
        </h2>
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import image from "../../assets/images/myimage.png";
import { GmailIcon } from "@/assets/Icons/Gmail";
import { LocationIcon } from "@/assets/Icons/Location";
import { PhoneIcon } from "@/assets/Icons/Phone";

export default function IntroductionSection() {
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
      className={`w-full p-10 flex flex-col lg:flex-row gap-10 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } `}
      ref={sectionRef}
    >
      <div className=" lg:flex-1 flex flex-col gap-5 justify-center items-start max-w-[1520px] mx-auto">
        <h1 className="xl:w-4/6 text-left xl:text-left text-white text-[3rem] leading-[3rem] lg:text-[4rem] lg:leading-[4rem]  font-GeomBold ">
          A Glimpse into My Developer Journey and Skills
        </h1>
        <h2 className="font-GeomRegular xl:w-4/6 text-red-600 text-lg lg:text-2xl">
          I am Christian Elmer Jay Y. Sugarol, a developer passionate about
          using technology to create impactful digital experiences. With
          expertise in front-end and back-end development, I've worked on
          diverse projects, from user-friendly interfaces to backend
          integrations with modern frameworks.
        </h2>
        <h3 className="xl:w-4/6 text-white font-GeomLight text-sm flex gap-3 flex-wrap">
          <div className="flex gap-1">
            <div>
              <GmailIcon />
            </div>
            <h1 className="mt-1">sugarolchristian8@gmail.com</h1>
          </div>
          <div className="flex gap-1">
            <div>
              <PhoneIcon />
            </div>
            <h1 className="mt-1">+639459738805</h1>
          </div>
          <div className="flex gap-1 ">
            <div>
              <LocationIcon />
            </div>
            <h1 className="mt-1">Quezon City, PHI</h1>
          </div>
        </h3>
      </div>
      <div className="absolute justify-center inset-0 w-full h-full flex z-0 top-[-115%]">
          <div className="h-[145%] w-[90%] blur-[100px] opacity-15 bg-red-500 rounded-full "></div>
      </div>
    </div>
  );
}

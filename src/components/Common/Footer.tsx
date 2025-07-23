import { useEffect, useRef, useState } from "react";
import Socials from "../Footer/Socials";
import Email from "../Footer/Email";
import Copyright from "../Footer/Copyright";

export default function Footer() {
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
      className={`w-full max-w-[1600px] mx-auto items-center flex p-10 flex-col gap-3 sm:flex-row sm:justify-between transition-all duration-1000 ${
        isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
      } overflow-hidden`}
      ref={sectionRef}
    >
      <Socials />
      <Email />
      <Copyright />
    </div>
  );
}

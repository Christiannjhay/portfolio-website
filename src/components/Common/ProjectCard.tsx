import { useEffect, useRef, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ProjectCard(props: any) {
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
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div
            className={` overflow-hidden group transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            ref={sectionRef}
          >
            <div className=" rounded-2xl overflow-hidden">
              <img
                src={props.image}
                alt={props.title}
                className="w-full  h-auto aspect-video cursor-pointer ease-in-out transform group-hover:scale-105 group-hover:opacity-45 transition duration-300"
              />
            </div>

            <div className="text-white pt-3 cursor-pointer transition duration-300 group-hover:text-red-500">
              {props.title}
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-red-600 border-none">
          <p className="text-white font-GeomLight">View project</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

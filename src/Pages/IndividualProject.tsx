import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Project from "../data/Project";
import Header from "@/components/Common/Header";
import ProjectCarousel from "@/components/IndividualProject/ProjectCarousel";
import ProjectDetails from "@/components/IndividualProject/ProjectDetails";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Common/Footer";

export default function IndividualProject() {

  const { projectId } = useParams<{ projectId: string }>();
  const individual = projectId
    ? Project.find((p) => p.id === parseInt(projectId))
    : null;

  const [isCarouselVisible, setCarouselVisible] = useState(false);
  const [isDetailsVisible, setDetailsVisible] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === carouselRef.current && entry.isIntersecting) {
            setCarouselVisible(true);
          } else if (
            entry.target === detailsRef.current &&
            entry.isIntersecting
          ) {
            setDetailsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (carouselRef.current) observer.observe(carouselRef.current);
    if (detailsRef.current) observer.observe(detailsRef.current);

    return () => {
      if (carouselRef.current) observer.unobserve(carouselRef.current);
      if (detailsRef.current) observer.unobserve(detailsRef.current);
    };
  }, []);

  if (!individual) {
    return <div>Project not found</div>;
  }

  return (
    <div className="w-full  bg-[#0A0A0A] min-h-screen text-white">
      <div className="relative z-50">
        <Header />
      </div>
      <div
        ref={carouselRef}
        className={`w-full max-w-[1900px] mx-auto relative flex z-50 justify-center p-5 lg:pt-16 transition-opacity duration-1000 ${
          isCarouselVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <ProjectCarousel
          images={individual.image}
          videos={individual.video || []}
        />
      </div>
      <div
        ref={detailsRef}
        className={`flex relative z-50 justify-center pb-20 transition-opacity duration-1000 ${
          isDetailsVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <ProjectDetails
          title={individual.title}
          description={individual.description}
          type={individual.type}
          year={individual.year}
          solution={individual.solution}
          technology={individual.technology}
        />
      </div>
      <div className="w-full">
        <Footer />
      </div>
      <div className="absolute inset-0 w-full h-full flex justify-center items-center z-0">
        <div className=" inset-0 w-[60%] h-[80%] rounded-full blur-[90px] opacity-20 bg-red-500 "></div>
      </div>
      <ScrollToTop />
    </div>
  );
}

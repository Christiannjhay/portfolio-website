import { useParams } from "react-router-dom";
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

  if (!individual) {
    return <div>Project not found</div>;
  }

  return (
    <div className="w-full bg-black min-h-screen text-white">
      <div>
        <Header />
      </div>
      <div className="w-full flex justify-center p-5 lg:pt-16">
        <ProjectCarousel
          images={individual.image}
          videos={individual.video || []}
        />
      </div>
      <div className="flex justify-center pb-20">
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
      <ScrollToTop />
    </div>
  );
}

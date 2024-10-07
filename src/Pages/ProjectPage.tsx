import ScrollToTop from "@/components/ScrollToTop";
import Header from "../components/Common/Header";
import ProjectSection from "../components/ProjectsPage/ProjectSection";
import Footer from "@/components/Common/Footer";

export default function ProjectPage() {
  return (
    <div className="relative w-full bg-[#0A0A0A] min-h-screen">
      <div className="w-full sticky top-0 z-50">
        <Header />
      </div>
      <div className="relative z-20">
        <ProjectSection />
      </div>
      <div className="w-full relative z-50">
        <Footer />
      </div>
      <ScrollToTop />
      <div className="absolute flex justify-center inset-0 w-full h-full">
        <div className="h-[80%] w-[80%] blur-[100px] translate-x-[-90%] inset-0 opacity-15 bg-red-500 rounded-full"></div>
      </div>
    </div>
  );
}

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
      <div className="">
        <ProjectSection />
      </div>
      <div className="w-full">
        <Footer />
      </div>
      <ScrollToTop />
      <div className="absolute inset-0 w-40 h-40 rounded-full blur-[50px] opacity-15 bg-red-500"></div>
    </div>
  );
}

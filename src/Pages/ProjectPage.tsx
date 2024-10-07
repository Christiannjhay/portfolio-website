import ScrollToTop from "@/components/ScrollToTop";
import Header from "../components/Common/Header";
import ProjectSection from "../components/ProjectsPage/ProjectSection";
import Footer from "@/components/Common/Footer";

export default function ProjectPage() {
  return (
    <div className=" w-full bg-black min-h-screen">
      <div>
        <Header />
      </div>
      <div className="">
        <ProjectSection />
      </div>
      <div className="w-full">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}

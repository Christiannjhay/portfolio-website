import ExperienceSection from "@/components/AboutPage/ExperienceSection";
import IntroductionSection from "@/components/AboutPage/IntroductionSection";
import LanguagesSection from "@/components/AboutPage/LanguagesSection";
import TechStackSection from "@/components/AboutPage/TechStackSection";
import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import ScrollToTop from "@/components/ScrollToTop";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-black">
      <div className="min-h-screen relative w-full top-0">
        <header className="">
          <Header />
        </header>
        <IntroductionSection />
      </div>
      <div className="w-full h-screen bg-black sticky top-0">
        <TechStackSection />
      </div>
      <div className="w-full h-screen bg-black sticky top-0">
        <LanguagesSection />
      </div>
      <div className="w-full min-h-screen flex flex-col justify-between bg-black sticky top-0">
        <ExperienceSection />
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}

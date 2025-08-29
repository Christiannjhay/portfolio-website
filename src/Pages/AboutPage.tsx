import ExperienceSection from "@/components/AboutPage/ExperienceSection";
import IntroductionSection from "@/components/AboutPage/IntroductionSection";
import LanguagesSection from "@/components/AboutPage/LanguagesSection";
import TechStackSection from "@/components/AboutPage/TechStackSection";
import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Seo from "@/components/Seo";

export default function AboutPage() {

  <Seo 
      title="About"
      url="https://www.christiansugarol.site/about"
    />
    
  return (
    <div className="min-h-screen w-full bg-[#0A0A0A]">
      <header className="sticky top-0 z-50">
        <Header />
      </header>
      <div className="relative w-full top-0">
        <IntroductionSection />
      </div>
      <div className="w-full bg-[#0A0A0A]">
        <TechStackSection/>
      </div>
      <div className="w-full bg-[#0A0A0A]">
        <LanguagesSection />
      </div>
      <div className="w-full flex flex-col justify-between bg-[#0A0A0A]">
        <ExperienceSection />
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}

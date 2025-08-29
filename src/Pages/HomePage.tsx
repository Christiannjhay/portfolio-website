import TakeAPeekSection from "@/components/HomePage/TakeAPeekSection";
import Header from "../components/Common/Header";
import HighlightsSection from "../components/HomePage/HighlightsSection";
import IntroductionSection from "../components/HomePage/IntroductionSection";
import Footer from "@/components/Common/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import LandingSection from "@/components/HomePage/LandingSection";
import Seo from "@/components/Seo";

export default function HomePage() {

  <Seo 
    title="Home"
    url="https://www.christiansugarol.site"
  />
  
  return (
    <div className="w-full bg-[#0A0A0A] min-h-screen flex flex-col items-center">
      <div className="w-full sticky top-0 z-50">
        <Header />
      </div>
      <div className="w-full">
        <LandingSection />
      </div>
      <div className="w-full xl:mt-[-48px]">
        <IntroductionSection />
      </div>
      <div className="w-full">
        <TakeAPeekSection />
      </div>
      <div className="w-full xl:mt-[-48px]">
        <HighlightsSection />
      </div>
      <div className="w-full">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}

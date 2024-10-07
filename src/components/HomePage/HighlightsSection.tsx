import HighlightsCard from "../Common/ProjectCard";
import Image1 from "../../assets/images/1.png";
import Image2 from "../../assets/images/2.png";
import Image3 from "../../assets/images/3.png";
import { Star } from "../../assets/Icons/Star";
import { Link } from "react-router-dom";

export default function HighlightsSection() {

  
  const highlights = [
    {
      id: 1,
      title: "CJ Movies",
      image: Image2,
    },
    {
      id: 2,
      title: "Shopify Sentinels",
      image: Image1,
    },
    {
      id: 3,
      title: "Infosoft DTR Website",
      image: Image3,
    },
  ];

  return (
    <div>
      <div className=" font-GeomBold px-5 bg-[#0A0A0A] py-10">
        <div className="flex justify-between pb-10 pr-10">
          <h1 className="text-white flex flex-col sm:flex-row gap-2 tracking-wider md:text-lg lg:text-2xl">
            <h1 className="underline-offset-[10px] underline decoration-red-500 decoration-[3.5px]">Project Highlights</h1>
            <div className="flex">
              <div className="animate-ping delay-75 text-red-500 mt-1 ml-2">
                <Star />
              </div>
              <div className="animate-ping delay-300 text-red-500 mt-1 ml-2">
                <Star />
              </div>
              <div className="animate-ping delay-700 text-red-500 mt-1 ml-2">
                <Star />
              </div>
            </div>
          </h1>

          <li className="text-slate-300 text-[11px] font-GeomLight cursor-pointer list-none">
            <Link to="/projects">See more</Link>
          </li>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((highlight) => (
            <Link to={`/projects/${highlight.id}`}>
              <HighlightsCard
                key={highlight.id}
                image={highlight.image}
                title={highlight.title}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

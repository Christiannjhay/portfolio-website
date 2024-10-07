import { Link } from "react-router-dom";

export default function LandingText() {
  return (
    <div className="select-none cursor-pointer w-full md:w-4/6 lg:w-3/6 flex flex-col justify-center items-center gap-1 sm:gap-2 md:gap-3">
      <div className="text-md sm:text-lg md:text-xl lg:text-2xl font-GeomLight font-semibold text-white">
        <h1>Hi I'm Christian</h1>
      </div>
      <div className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl w-4/5 md:w-full font-GeomBold text-white text-center font-semibold">
        <h2>Full-Spectrum Development for Modern Digital Solutions</h2>
      </div>
      <div className="text-sm sm:text-lg md:text-xl lg:text-2xl pt-2 w-2/3 font-GeomRegular text-red-500 text-center font-light">
        <h2>I make the complex simple</h2>
      </div>
      <div className="">
        <button className="text-white px-[2px] py-[2px] btn font-GeomRegular text-[10px] md:text-sm rounded-3xl bg-red-500 hover:bg-red-700">
          <Link to={"/about"}>
            <h1 className="in rounded-3xl bg-red-500 hover:bg-red-700 p-1 md:p-2">
              Learn More About Me
            </h1>
          </Link>
        </button>
      </div>
    </div>
  );
}

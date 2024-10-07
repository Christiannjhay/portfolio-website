import { NextIcon } from "@/assets/Icons/Next";
import { ReactIcon } from "@/assets/Icons/React";
import { SassIcon } from "@/assets/Icons/Sass";
import { TailwindIcon } from "@/assets/Icons/Tailwind";

export default function FrontEnd() {
  return (
    <div>
      <div className="font-GeomBold text-white ">
        <h1 className="text-red-500 md:text-lg lg:text-3xl">FRONT-END</h1>
      </div>
      <div className="flex flex-wrap gap-3 lg:gap-8 pt-3 uppercase font-GeomLight text-[0.8rem] text-white">
        <div className="flex flex-col items-center  ">
          <div className="md:text-xl lg:text-3xl">
            <ReactIcon />
          </div>
          <h1>ReactJS</h1>
        </div>
        <div className="flex flex-col items-center ">
          <div className="md:text-xl lg:text-3xl">
            <NextIcon/>
          </div>
          <h1>NextJS</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <TailwindIcon/>
          </div>
          <h1>TailwindCSS</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <SassIcon/>
          </div>
          <h1>Sass</h1>
        </div>
        
      </div>
    </div>
  );
}

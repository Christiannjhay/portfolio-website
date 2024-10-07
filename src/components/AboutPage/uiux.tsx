import { DavinciIcon } from "@/assets/Icons/Davinci";
import { FigmaIcon } from "@/assets/Icons/Figma";
import { IllustratorIcon } from "@/assets/Icons/Illustrator";
import { PhotoshopIcon } from "@/assets/Icons/Photoshop";

export default function UiUx() {
  return (
    <div>
      <div className="font-GeomBold text-white ">
        <h1 className="text-red-500 md:text-lg lg:text-3xl">UI/UX</h1>
      </div>
      <div className="flex flex-wrap gap-3 lg:gap-8 pt-3 uppercase font-GeomLight text-[0.8rem] text-white">
        <div className="flex flex-col items-center  ">
          <div className="md:text-xl lg:text-3xl">
            <FigmaIcon />
          </div>
          <h1>Figma</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <IllustratorIcon />
          </div>
          <h1>Illustrator</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <PhotoshopIcon />
          </div>
          <h1>photoshop</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <DavinciIcon />
          </div>
          <h1>davinci resolve</h1>
        </div>
      </div>
    </div>
  );
}

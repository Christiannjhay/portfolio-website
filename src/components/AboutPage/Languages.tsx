import { CsharpIcon } from "@/assets/Icons/Csharp";
import { JavaIcon } from "@/assets/Icons/Java";
import { JavascriptIcon } from "@/assets/Icons/Javascript";
import { PythonIcon } from "@/assets/Icons/Python";
import { SqlIcon } from "@/assets/Icons/Sql";
import { TypescriptIcon } from "@/assets/Icons/Typescript";

export default function Languages() {
  return (
    <div>
      <div className="flex flex-wrap gap-3 lg:gap-8 pt-3 uppercase font-GeomLight text-[0.8rem] text-white">
        <div className="flex flex-col items-center  ">
          <div className="md:text-xl lg:text-3xl">
            <JavascriptIcon />
          </div>
          <h1>Javascript</h1>
        </div>
        <div className="flex flex-col items-center ">
          <div className="md:text-xl lg:text-3xl">
            <TypescriptIcon />
          </div>
          <h1>typescript</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <JavaIcon />
          </div>
          <h1>Java</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <SqlIcon />
          </div>
          <h1>Sql</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <PythonIcon />
          </div>
          <h1>python</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <CsharpIcon />
          </div>
          <h1>C#</h1>
        </div>
      </div>
    </div>
  );
}

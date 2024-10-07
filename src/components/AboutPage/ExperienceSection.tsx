import ExperienceCard from "./ExperienceCard";


export default function ExperienceSection() {
  return (
    <div className="w-full p-10 md:p-14 lg:px-14 xl:px-48 ">
      <div className="text-white font-GeomBold text-[2rem] md:text-[3rem]">
        <h1 className="underline-offset-[10px] underline decoration-red-500 decoration-[3.5px]">
          EXPERIENCE
        </h1>
      </div>
      <div className="flex flex-col md:flex-row pt-10 gap-3">
        <div className="w-full ">
          <ExperienceCard/>
        </div>
      </div>
    </div>
  );
}

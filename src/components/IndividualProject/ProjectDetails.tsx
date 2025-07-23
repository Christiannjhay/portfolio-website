interface ProjectDetailsProps {
  title: string;
  year: string;
  type: string;
  description: string;
  solution: string;
  technology: string[];
}

export default function ProjectDetails(props: ProjectDetailsProps) {
  return (
    <div className="w-full max-w-[1650px] mx-auto font-GeomRegular p-5 flex flex-col overflow-hidden sm:px-10 md:px-20  lg:w-[77%]">
      <div className="flex flex-col gap-3 lg:grid lg:grid-cols-12 ">
        <div className="flex flex-col gap-3 lg:col-span-5 lg:gap-5">
          <div className="flex gap-2 md:text-xl lg:text-2xl">
            <h1 className="text-red-500">Project:</h1>
            {props.title}
          </div>
          <div className="flex gap-2 md:text-xl lg:text-2xl">
            <h1 className="text-red-500">Year:</h1>
            {props.year}
          </div>
          <div className="flex gap-2 md:text-xl lg:text-2xl">
            <h1 className="text-red-500">Type:</h1>
            <div className="uppercase">{props.type}</div>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:col-span-7">
          <div className="flex flex-col">
            <h1 className="text-red-500 md:text-xl lg:text-2xl">
              Description:
            </h1>
            <h2 className="lg:text-lg">{props.description}</h2>
          </div>
          <div className="">
            <h1 className="text-red-500 md:text-xl lg:text-2xl">Solution:</h1>
            <h2 className="lg:text-lg">{props.solution}</h2>
          </div>
          <div className="">
            <h1 className="text-red-500 md:text-xl lg:text-2xl">
              Technology Used:
            </h1>
            <h2 className="lg:text-lg">
              {props.technology.map((tech, index) => (
                <span key={index}>
                  {tech}
                  {index < props.technology.length - 1 && ", "}
                </span>
              ))}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

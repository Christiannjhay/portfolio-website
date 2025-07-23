import { Link } from "react-router-dom";
import ProjectCard from "../Common/ProjectCard";
import projects from "../../data/projects";

export default function ProjectSection() {
  return (
    <div className="w-full max-w-[1670px] mx-auto font-GeomBold p-5 md:p-10 lg:p-20">
      <h1 className="text-white text-xl lg:text-4xl underline-offset-[10px] underline decoration-red-500 decoration-[3.5px]">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
        {projects.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`}>
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

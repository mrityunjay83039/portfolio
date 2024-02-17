import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="min-h-[98vh] flex flex-col justify-center gap-8 relative">
      <h3 className=" text-textWhite text-2xl md:text-[48px] md:leading-[56px] md:text-left mt-8">
        Projects
      </h3>
      <div className="flex flex-row flex-wrap gap-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;

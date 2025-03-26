import React from "react";
import { ProjectRepo } from "../types";
import { SiGithub } from "react-icons/si";

interface ProjectCardProps {
  repo: ProjectRepo;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ repo }) => {
  return (
    <div
      key={repo.id}
      className="card card-border bg-base-100 sm:w-[16rem] md:w-[20rem] shadow-sm"
    >
      <figure className="px-4 pt-4 mb-2">
        <img
          src={repo.preview}
          alt={repo.name}
          className="rounded-xl object-cover max-h-60 w-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        {/* Name and description */}
        <h2 className="card-title text-lg md:text-xl">{repo.name}</h2>
        <p className="text-sm md:text-base">{repo.description}</p>

        {/* Techstack */}
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {repo.techstack.map((tech, idx) => (
            <div
              key={idx}
              className="text-xs md:text-sm font-semibold bg-gray-200 p-2 rounded-lg"
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Button actions */}
        <div className="card-actions tooltip mt-4">
          <div className="tooltip-content">
            <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">
              Open?
            </div>
          </div>
          <a href={repo.link} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-secondary flex items-center gap-2">
              <SiGithub size={20} />
              <span className="text-sm md:text-base">Github</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

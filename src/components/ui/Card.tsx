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
      className="card card-border bg-base-100 w-full max-w-xs sm:max-w-sm md:max-w-md shadow-md transition-transform hover:scale-105"
    >
      {/* Ảnh preview */}
      <figure className="px-4 pt-4">
        <img
          src={repo.preview}
          alt={repo.name}
          className="rounded-xl object-cover w-full aspect-video"
        />
      </figure>

      {/* Nội dung */}
      <div className="card-body items-center text-center">
        <h2 className="card-title text-lg md:text-xl">{repo.name}</h2>
        <p className="text-sm md:text-base text-gray-600">{repo.description}</p>

        {/* Techstack */}
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {repo.techstack.map((tech, idx) => (
            <div
              key={idx}
              className="text-xs md:text-sm font-semibold bg-gray-200 px-3 py-1 rounded-full"
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Nút GitHub */}
        <div className="mt-4 w-full flex justify-center">
          <a href={repo.link} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-secondary flex items-center justify-center gap-2 p-2 w-fit">
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

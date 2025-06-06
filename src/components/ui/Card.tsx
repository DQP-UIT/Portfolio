import React from "react";
import { ProjectRepo } from "../types";
import { SiGithub } from "react-icons/si";
import Modal from "./Modal";

interface ProjectCardProps {
  repo: ProjectRepo;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ repo }) => {
  return (
    <div
      key={repo.id}
      className="card card-border bg-slate-900/30 w-full max-w-xs sm:max-w-sm md:max-w-md shadow-md transition-all duration-200 ease-in hover:bg-purple-800/50"
    >
      {/* Ảnh preview */}
      <figure className="px-4 pt-4">
        <div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-800/20 flex items-center justify-center">
          <img
            src={typeof repo.preview === "string" ? repo.preview : ""}
            alt={repo.name}
            className="max-w-full max-h-full object-contain rounded-xl"
          />
        </div>
      </figure>

      {/* Nội dung */}
      <div className="card-body items-center text-center font-mono">
        <h2 className="card-title text-lg md:text-xl">{repo.name}</h2>
        <p className="text-sm md:text-base">{repo.description}</p>

        {/* Techstack */}
        <div className="flex flex-wrap w-full justify-center gap-2 mt-2">
          {repo.techstack.map((tech, idx) => (
            <div
              key={idx}
              className="text-xs md:text-sm font-semibold bg-gray-200/20 px-3 py-1 rounded-full"
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Nút GitHub */}
        <div className="mt-4 w-full flex justify-center gap-4 md:gap-8 lg:gap-10">
          <a href={repo.link} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-secondary flex items-center justify-center gap-2 p-2 w-fit">
              <SiGithub size={20} />
              <span className="text-sm md:text-base">Github</span>
            </button>
          </a>
          <Modal repo={repo} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

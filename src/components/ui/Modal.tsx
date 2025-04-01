"use client";

import React, { useRef } from "react";
import { ProjectRepo } from "../types";
import { SiGithub } from "react-icons/si";
import { FaPlusCircle } from "react-icons/fa";

interface ProjectModalProps {
  repo: ProjectRepo;
}

const Modal: React.FC<ProjectModalProps> = ({ repo }) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  return (
    <div>
      <button
        className="btn btn-neutral flex items-center justify-center gap-2 p-2 w-fit"
        onClick={() => modalRef.current?.showModal()}
      >
        <FaPlusCircle size={20} />
        More
      </button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box flex flex-wrap justify-center items-center">
          <figure className="px-4 pt-4">
            <img
              src={typeof repo.preview === "string" ? repo.preview : ""}
              alt={repo.name}
              className="rounded-xl object-cover w-full aspect-video"
            />
          </figure>
          <h3 className="font-bold text-lg mt-4 p-2 w-full text-center">
            {repo.name}
          </h3>
          <p className="p-2 mt-4">{repo.description}</p>
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
          <a
            href={repo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4"
          >
            <button className="btn btn-secondary flex items-center justify-center gap-2 p-2 w-fit">
              <SiGithub size={20} />
              <span className="text-sm md:text-base">Github</span>
            </button>
          </a>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;

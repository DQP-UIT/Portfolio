import React from "react";
import ProjectCard from "./ui/Card";

const Project = () => {
  const repolist = [
    {
      id: 1,
      name: "DQP-UIT",
      description: "",
      preview: "/portfolio.png",
      techstack: [
        "NestJS",
        "GraphQL",
        "PostgreSQL",
        "Docker",
        "AWS ECR",
        "AWS EC2",
        "Github Actions",
      ],
      link: "https://github.com/DQP-UIT/DQP-UIT",
    },
    {
      id: 2,
      name: "DQP-UIT",
      description: "",
      preview: "/portfolio.png",
      techstack: [
        "NestJS",
        "GraphQL",
        "PostgreSQL",
        "Docker",
        "AWS ECR",
        "AWS EC2",
        "Github Actions",
      ],
      link: "https://github.com/DQP-UIT/DQP-UIT",
    },
    {
      id: 3,
      name: "DQP-UIT",
      description: "",
      preview: "/portfolio.png",
      techstack: [
        "NestJS",
        "GraphQL",
        "PostgreSQL",
        "Docker",
        "AWS ECR",
        "AWS EC2",
        "Github Actions",
      ],
      link: "https://github.com/DQP-UIT/DQP-UIT",
    },
    {
      id: 4,
      name: "DQP-UIT",
      description: "",
      preview: "/portfolio.png",
      techstack: [
        "NestJS",
        "GraphQL",
        "PostgreSQL",
        "Docker",
        "AWS ECR",
        "AWS EC2",
        "Github Actions",
      ],
      link: "https://github.com/DQP-UIT/DQP-UIT",
    },
  ];

  return (
    <div className="w-3/4 flex flex-wrap">
      <span className="text-2xl mb-8 md:mb-12 font-semibold">Project</span>
      <div className="w-full justify-center gap-8 flex flex-wrap">
        {repolist.map((repo) => (
          <div key={repo.id}>
            <ProjectCard repo={repo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

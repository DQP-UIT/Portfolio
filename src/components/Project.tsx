import React from "react";
import ProjectCard from "./ui/Card";
import Gradient from "../../public/Gradient.svg";
import Image from "next/image";

const Project = () => {
  const repolist = [
    {
      id: 1,
      name: "Web-SieuThiBanVe",
      description:
        "Một website trình bày các bản vẽ kiến trúc, cho phép người dùng duyệt, đặt và tải xuống các bản thiết kế.",
      preview: "/DesignWare.png",
      techstack: ["JavaScript", "Vite", "Tailwind CSS", "ESLint", "Prettier"],
      link: "https://github.com/DQP-UIT/Sieu-Thi-Ban-Ve-FE",
    },
    {
      id: 2,
      name: "TravelWeb-Frontend",
      description:
        "Một trang web du lịch cung cấp cho người dùng khả năng khám phá điểm đến, xem các gói du lịch và đặt chuyến đi một cách liền mạch.",
      preview: "/TravelWeb.png",
      techstack: ["React", "Vite", "Tailwind CSS", "ESLint", "Vercel"],
      link: "https://github.com/DQP-UIT/SE100.P12-TravelWeb-Frontend",
    },
    {
      id: 3,
      name: "Portfolio",
      description:
        "Thiết kế và phát triển một trang web portfolio cá nhân để trưng bày các dự án, kỹ năng và kinh nghiệm một cách chuyên nghiệp.",
      preview: "/portfolio.png",
      techstack: ["Next.js", "Tailwind CSS", "ESLint", "Prettier", "Threejs"],
      link: "https://github.com/DQP-UIT/Portfolio",
    },
    {
      id: 4,
      name: "Skill-exchange",
      description:
        "Một ứng dụng di động cho phép người dùng trao đổi kỹ năng, kết nối những người có nhu cầu học hỏi và chia sẻ kiến thức.",
      preview: "/SkillMobile.png",
      techstack: ["React Native", "Tailwind CSS", "ESLint", "Prettier"],
      link: "https://github.com/DuongWuangDat/SE346-skill-exchange",
    },
  ];


  return (
    <div className="w-3/4 flex flex-wrap">
      <span className="text-2xl mb-8 md:mb-12 font-semibold">Project</span>
      <div className="w-full justify-center items-center gap-8 flex flex-wrap">
        <Image src={Gradient} alt="gradientback" className="absolute" />
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

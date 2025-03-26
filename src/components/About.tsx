"use client";

import React from "react";
import { Category } from "./types";
import { DiCodeBadge } from "react-icons/di";
import { BiBulb } from "react-icons/bi";
import { PiPottedPlantBold } from "react-icons/pi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs } from "react-icons/si";
import { DiJava } from "react-icons/di";

const About = () => {
  const abilities: Category[] = [
    {
      id: 1,
      name: "Web Development",
      description:
        "Skilled in building responsive, user-centric web applications using modern frameworks and tools.",
      icon: <DiCodeBadge size={32} />,
    },
    {
      id: 2,
      name: "Problem Solving",
      description:
        "Enjoy tackling complex challenges with logical thinking and creative solutions.",
      icon: <BiBulb size={32} />,
    },
    {
      id: 3,
      name: "Quick to Adapt",
      description:
        "Able to quickly learn new technologies and adapt efficiently to changing environments.",
      icon: <PiPottedPlantBold size={32} />,
    },
    {
      id: 4,
      name: "Teamwork",
      description:
        "Able to contribute and adapt in team settings, valuing feedback and collaboration.",
      icon: <HiOutlineChatBubbleLeftRight size={32} />,
    },
  ];

const techIcons = [
  {
    id: 1,
    icon: FaReact,
    name: "React",
    color: "#61DAFB",
  },
  {
    id: 2,
    icon: FaNodeJs,
    name: "Node.js",
    color: "#339933",
  },
  {
    id: 3,
    icon: FaHtml5,
    name: "HTML",
    color: "#E44D26",
  },
  {
    id: 4,
    icon: FaCss3Alt,
    name: "CSS",
    color: "#1572B6",
  },
  {
    id: 5,
    icon: DiJava,
    name: "Java",
    color: "#007396",
  },
  {
    id: 6,
    icon: SiJavascript,
    name: "JavaScript",
    color: "#F7DF1E",
  },
  {
    id: 7,
    icon: FaDocker,
    name: "Docker",
    color: "#2496ED",
  },
  {
    id: 8,
    icon: SiTypescript,
    name: "TypeScript",
    color: "#3178C6",
  },
  {
    id: 9,
    icon: SiNextdotjs,
    name: "Next.js",
    color: "#000000",
  },
  {
    id: 10,
    icon: FaGitAlt,
    name: "Git",
    color: "#F05032",
  },
];
  return (
    <div className="grid h-fit w-3/4 font-mono">
      {/* Information */}
      <div className="row-start-1 h-fit mb-16 md:mb-28 flex flex-col justify-start items-start w-full md:w-full ">
        <span className="text-2xl mb-2 font-semibold">Introduction</span>
        <p className="w-full text-xl bg-gray-700 p-4 rounded-lg md:w-full">
          An aspiring full-stack web developer with a strong foundation in
          modern web technologies like React, Next.js, Node.js, and TypeScript.
          I’m excited to apply for the Web Developer position, where I can
          contribute my technical skills and problem-solving mindset to build
          efficient, scalable, and user-focused web applications. Driven by
          continuous learning and collaboration, I’m eager to take on challenges
          and grow as a developer while delivering real value to the team and
          end users.
        </p>
      </div>
      {/* Abilites */}
      <div className="row-start-2 flex flex-col justify-start items-start h-fit w-full">
        <span className="text-2xl mb-2 font-semibold">Abilities</span>

        {/* Grid layout responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
          {abilities.map((ability) => (
            <div
              key={ability.id}
              className="p-4 flex flex-col md:flex-row items-start md:items-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-2xl shadow-md w-full"
            >
              {ability.icon && (
                <div className="p-2 mr-4 flex items-center justify-center text-3xl">
                  {ability.icon}
                </div>
              )}
              <div className="flex flex-col">
                <div className="text-xl font-semibold">{ability.name}</div>
                <div className="text-sm text-gray-300">
                  {ability.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Techstack */}
      <div className="row-start-3 flex flex-col mt-16 md:mt-28 justify-start items-start w-full md:w-full">
        <span className="text-2xl mb-2 font-semibold">Techstack</span>
        <div className="relative w-full p-4 h-[80px] overflow-hidden flex items-center justify-center rounded-xl">
          {/* Motion 1 */}
          <motion.div
            className="flex gap-8 w-fit absolute left-0 top-0"
            animate={{ x: [0, -100 * techIcons.length] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: techIcons.length * 2,
                ease: "linear",
              },
            }}
          >
            {[...techIcons, ...techIcons].map((icon, idx) => (
              <div
                key={`icon1-${idx}`}
                className="flex-shrink-0  mx-4 min-w-[100px] flex flex-col items-center justify-center"
              >
                <icon.icon size={60} color={icon.color} />
                <span className="text-sm text-white font-semibold">
                  {icon.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

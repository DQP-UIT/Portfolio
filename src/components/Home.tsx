"use client";

import React from "react";
import Me from "../../public/Me.svg";
import Gradient from "../../public/Gradient.svg";
import { TypeAnimation } from "react-type-animation";
import { PiArrowFatLinesDown } from "react-icons/pi";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 px-4">
      {/* Avatar Section */}
      <div className="grid grid-cols-1 grid-rows-1 row-start-1 w-64 h-64 md:w-96 md:h-96 select-none mx-auto">
        <div className="avatar col-start-1 row-start-1 flex items-center justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full">
            <Image src={Me} alt="Avatar of Me" />
          </div>
        </div>
        <div className="col-start-1 row-start-1">
          <Image src={Gradient} alt="gradientback" />
        </div>
      </div>

      {/* Text Section */}
      <div className="font-mono row-start-2 md:row-start-1 text-center justify-start md:text-left">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          Hello! I am
          <span className="block md:inline text-3xl font-bold md:text-4xl lg:text-5xl font-mono">
            {" "}
            Quang Phuoc
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl mt-2">I am a</h2>
        <TypeAnimation
          sequence={[
            "Fullstack Web Developer",
            1000,
            "React Enthusiast ",
            1000,
            "Node.js Enthusiast",
            1000,
          ]}
          wrapper="span"
          className="text-2xl md:text-3xl font-semibold"
          repeat={Infinity}
        />

        <h2 className="text-xl animate-bounce mt-10 md:mt-6">
          Click this button to see more about me
        </h2>
        <div className="flex flex-col justify-center items-center">
          <PiArrowFatLinesDown
            className="animate-bounce mt-6 md:mt-4"
            size={80}
          />
          <a href="#about" className="mt-2">
            <button className="btn btn-secondary w-fit p-4 text-lg md:text-xl mt-4 md:mt-3">
              See more
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

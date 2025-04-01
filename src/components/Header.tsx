import React from "react";
import { Category } from "./types";
import CategoryBar from "./ui/CategoryBar";

const Header = () => {
  const categories: Category[] = [
    { id: 1, name: "Home", description: "#home" },
    { id: 2, name: "About", description: "#about" },
    { id: 3, name: "Project", description: "#project" },
    { id: 4, name: "Contact", description: "#contact" },
  ];

  return (
    <div className="w-full flex flex-wrap justify-between">
      <div className="avatar">
        <div className="w-16 rounded-full">
          <img src="/Songoku.jpg" />
        </div>
      </div>
      <div>
        <CategoryBar categories={categories} />
      </div>
    </div>
  );
};

export default Header;

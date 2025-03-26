import React from "react";
import { Category } from "../types";

interface CategoryBarProps {
  categories: Category[];
}

const CategoryBar: React.FC<CategoryBarProps> = ({ categories }) => {
  return (
    <div className="w-full px-4">
      <div className="join join-horizontal flex flex-wrap justify-center gap-0.5 p-3 md:justify-start">
        {categories.map((category) => (
          <a href={category.description} key={category.id}>
            <button className="btn btn-outline btn-secondary join-item text-sm md:text-base px-4 py-2">
              {category.name}
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;

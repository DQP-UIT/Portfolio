import { ReactNode } from "react";

interface Category {
  id: number;
  name: string;
  description?: string;
  icon?: ReactNode;
}

interface ProjectRepo {
  id: number;
  name: string;
  description: string;
  preview: ReactNode;
  techstack: string[];
  link: string;
}

export type {Category , ProjectRepo}
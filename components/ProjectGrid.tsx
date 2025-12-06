"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export type ProjectData = {
  title: string;
  description: string;
  url: string | "none" | "contact";
  status: "active" | "deprecated";
  techIcon?: React.ReactNode;

  hideStatus?: boolean;
  customButtonText?: string;
};
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ProjectGrid = ({ projects }: { projects: ProjectData[] }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {projects.map((project, index) => (
        <motion.div key={index} variants={item} className="h-full">
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </motion.div>
  );
};
export default ProjectGrid;


import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  label: string;
}

const TechBadge = ({ label }: TechBadgeProps) => {
  return (
    <span className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-md mr-2">
      {label}
    </span>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  technologies,
  link = "#",
}: ProjectCardProps) => {
  return (
    <div className="flex gap-6 mb-12">
      <div className="w-48 h-32 flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-600 mb-3">{description}</p>
        <div className="mb-2">
          {technologies.map((tech, index) => (
            <TechBadge key={index} label={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

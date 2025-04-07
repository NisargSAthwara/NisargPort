
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface TagProps {
  label: string;
}

const Tag = ({ label }: TagProps) => {
  return (
    <span className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-md mr-2 mt-1">
      {label}
    </span>
  );
};

interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

const ArticleCard = ({
  title,
  description,
  imageUrl,
  tags,
  link = "#",
}: ArticleCardProps) => {
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
          {tags.map((tag, index) => (
            <Tag key={index} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

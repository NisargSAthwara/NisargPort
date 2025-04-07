
import { cn } from "@/lib/utils";

interface ExperienceItemProps {
  timeframe: string;
  company: string;
  companyColor?: string;
  title: string;
  subtitle: string;
  bullets: string[];
}

const ExperienceItem = ({
  timeframe,
  company,
  companyColor = "text-green-500",
  title,
  subtitle,
  bullets,
}: ExperienceItemProps) => {
  return (
    <div className="mb-16">
      <div className="flex justify-between items-start mb-2">
        <div className="text-gray-500">{timeframe}</div>
        <div className={cn("font-medium", companyColor)}>{company}</div>
      </div>
      <h3 className="text-xl font-medium mb-1">{title}</h3>
      <p className="text-gray-600 mb-4">{subtitle}</p>
      <ul className="space-y-3">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-gray-400 mt-1">◦</span>
            <span className="text-gray-600">{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;

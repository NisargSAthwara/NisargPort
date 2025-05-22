
import { Link, useLocation } from "react-router-dom";
import { Twitter, Linkedin, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProfileProps {
  name: string;
  role: string;
  imageUrl: string;
}

const Profile = ({ name, role, imageUrl }: ProfileProps) => {
  return (
    <div className="flex flex-col items-center mb-10 mt-6">
      <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive: boolean;
}

const NavItem = ({ icon, label, to, isActive }: NavItemProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 px-4 py-2 my-1 rounded-md text-gray-500 hover:bg-gray-100 transition-colors",
        isActive && "bg-gray-100 text-gray-900"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="w-64 min-h-screen bg-gray-50 border-r border-gray-200 fixed left-0 top-0 bottom-0">
      <Profile
        name="Nisarg Sathwara"
        role="Ai-ML-Engineer"
        imageUrl="/lovable-uploads/210160107071_1-photoaidcom-cropped.jpeg"
      />

      <nav className="px-2 py-4">
        <NavItem
          icon={<div className="w-5 h-5 flex items-center justify-center">⚡</div>}
          label="Home"
          to="/"
          isActive={currentPath === "/"}
        />
        <NavItem
          icon={<div className="w-5 h-5 flex items-center justify-center">👤</div>}
          label="About"
          to="/about"
          isActive={currentPath === "/about"}
        />
        <NavItem
          icon={<div className="w-5 h-5 flex items-center justify-center">📁</div>}
          label="Projects"
          to="/projects"
          isActive={currentPath === "/projects"}
        />
        <NavItem
          icon={<div className="w-5 h-5 flex items-center justify-center">📰</div>}
          label="Articles"
          to="/articles"
          isActive={currentPath === "/articles"}
        />
        <NavItem
          icon={<div className="w-5 h-5 flex items-center justify-center">✉️</div>}
          label="Contact"
          to="/contact"
          isActive={currentPath === "/contact"}
        />
      </nav>

      <div className="px-4 py-6">
        <h3 className="text-sm font-medium text-gray-500 mb-3">Socials</h3>
        <div className="space-y-2">
          {/* <Link to="#" className="flex items-center gap-3 px-2 py-1 text-gray-500 hover:text-gray-900">
            <Twitter className="w-5 h-5" />
            <span>Twitter</span>
          </Link> */}
          <Link to="https://www.linkedin.com/in/nisargsathwara/" target="_blank" className="flex items-center gap-3 px-2 py-1 text-gray-500 hover:text-gray-900">
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </Link>
          <Link to="https://github.com/NisargSAthwara" target="_blank" className="flex items-center gap-3 px-2 py-1 text-gray-500 hover:text-gray-900">
            <Github className="w-5 h-5" />
            <span>Github</span>
          </Link>
        </div>
      </div>

      <div className="px-4 py-4 mt-10">
        <Link
          to="/resume"
          className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors">
          Read Resume
          <span className="ml-1">→</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;

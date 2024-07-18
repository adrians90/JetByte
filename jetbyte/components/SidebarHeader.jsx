import { SiOpenaigym } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";

const SidebarHeader = () => {
  return (
    <div className="flex items-center mb-4 gap-4 px-4">
      <SiOpenaigym className="w-20 h-20 text-lime-500" />
      <h2 className="text-xl font-extrabold text-slate-50">
        Jet<span className="text-lime-500 italic">Byte</span>
      </h2>
      <ThemeToggle />
    </div>
  );
};

export default SidebarHeader;

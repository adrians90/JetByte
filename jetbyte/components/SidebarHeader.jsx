import { SiOpenaigym } from "react-icons/si";

const SidebarHeader = () => {
  return (
    <div className="flex items-center mb-4 gap-4 px-4">
      <SiOpenaigym className="w-10 h-20 text-fuchsia-500" />
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-50">
        Jet<span className="text-fuchsia-500 italic">Byte</span>
      </h2>
    </div>
  );
};

export default SidebarHeader;

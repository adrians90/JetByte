import { SiOpenaigym } from "react-icons/si";
import { IoClose } from "react-icons/io5";

const SidebarHeader = () => {
  return (
    <div className="flex items-center mb-4 gap-4 px-4">
      <SiOpenaigym className="w-10 h-20 text-fuchsia-500" />
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-50">
        Jet<span className="text-fuchsia-500 italic">Byte</span>
      </h2>
      <div>
        <input type="checkbox" id="my-drawer-2" className="drawer-toggle" />
        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden fixed top-4 right-4 cursor-pointer text-lg text-fuchsia-500 hover:text-fuchsia-400"
        >
          <IoClose className="cursor-pointer text-3xl text-fuchsia-500 hover:text-fuchsia-400" />
        </label>
      </div>
    </div>
  );
};

export default SidebarHeader;

import Sidebar from "@/components/Sidebar";

import { FaBarsStaggered } from "react-icons/fa6";

const layout = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input type="checkbox" id="my-drawer-2" className="drawer-toggle" />
      <div className="drawer-content box-border ">
        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden fixed top-3 right-3"
        >
          <FaBarsStaggered className="w-8 h-8 text-fuchsia-500 cursor-pointer hover:text-fuchsia-400" />
        </label>

        <div className="flex md:flex items-center md:flex-col px-5 md:px-8 py-12 min-h-screen bg-gradient-to-r from-slate-950 via-slate-800 to-fuchsia-500/10">
          {children}
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
};

export default layout;

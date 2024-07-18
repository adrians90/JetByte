import Sidebar from "@/components/Sidebar";
import { ClerkProvider } from "@clerk/nextjs";

import { FaBarsStaggered } from "react-icons/fa6";

const layout = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input type="checkbox" id="my-drawer-2" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden fixed top-6 right-6"
        >
          <FaBarsStaggered className="w-8 h-8 text-lime-500 cursor-pointer hover:text-lime-300" />
        </label>

        <div className="bg-slate-950 px-8 py-12 min-h-screen">{children}</div>
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

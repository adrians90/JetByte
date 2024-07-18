import MemberProfile from "./MemberProfile";
import NavLinks from "./NavLinks";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  return (
    <div className="text-slate-50 px-4 w-80 min-h-full bg-slate-900 py-12 grid grid-rows-[auto,1fr,auto]">
      <SidebarHeader />
      <NavLinks />
      <MemberProfile />
    </div>
  );
};

export default Sidebar;

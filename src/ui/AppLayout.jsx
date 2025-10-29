import { Outlet } from "react-router";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="font-arimo grid h-screen w-screen grid-rows-[auto,1fr,auto] overflow-x-hidden overflow-y-scroll px-20 pt-10">
      <div className="">
        <TopBar />
      </div>
      <div>
        <Outlet />
      </div>
      <div className="self-end">
        <Navbar />
      </div>
    </div>
  );
}

export default AppLayout;

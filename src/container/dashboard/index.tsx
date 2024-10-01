"use client";
import SideBar from "./sidebar";

import MainPage from "./main";
import { useProvider } from "@/context/UserContext";

const Dashboard = () => {
  const { tagStatus,addTag } = useProvider();

  
  
  return (
    <>
      {(tagStatus || addTag)  && (
        <div
          className={` fixed ${
            (tagStatus || addTag) ? `bg-black opacity-50` : `opacity-100`
          } w-[100vw] h-[100vh] z-30 `}
        ></div>
      )}

      <div className="flex z-50">
        <SideBar />
        <MainPage />
      </div>
    </>
  );
};

export default Dashboard;

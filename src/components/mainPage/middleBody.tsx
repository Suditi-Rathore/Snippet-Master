"use client";

import { useProvider } from "@/context/UserContext";
import AddSnip from "./addSnip";
import NoSnipBody from "./noSnipBody";
import Nodes from "./nodes";

const MiddleBody = () => {
  const { handleCurrentTheme, createSnippet, setCreateSnippet, nodeArray } =
    useProvider();
    
  return (
    <>
      <div
        className={`${
          handleCurrentTheme() ? `bg-[#f1f5f9]` : "bg-darkbg"
        }   w-full flex mt-2 py-6 ,px-3`}
      >
        {nodeArray.length === 0 && <NoSnipBody />}

        
        {nodeArray.length !==0 && <Nodes/>}

        <AddSnip />
      </div>
    </>
  );
};

export default MiddleBody;

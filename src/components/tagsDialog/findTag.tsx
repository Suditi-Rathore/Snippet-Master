"use client";
import { useProvider } from "@/context/UserContext";
import TagList from "./tagList";
import { useState } from "react";

const FindTag = () => {
  const { setTagStatus, handleCurrentTheme, setAddTag, tagArray } = useProvider();
  const [findTag,setFindTag] =useState<string>("")
  return (
    <>
      <div className="fixed top-48 left-0 right-0 mr-auto ml-auto w-[50%] flex flex-col gap-5 rounded-md h-[55%] shadow-2xl opacity-100 z-40 bg-white p-3">
        <div className="flex justify-between">
          <i className="bi bi-tags text-black font-bold text-lg not-italic">
            <span className="pl-2 text-xl">Tags</span>
          </i>

          <button onClick={() => setTagStatus(false)}>
            <i className="bi bi-x-lg text-gray-500 hover:bg-slate-200 p-1 rounded-md "></i>
          </button>
        </div>

        <div
          className={`${
            handleCurrentTheme() ? `bg-[#f1f5f9]` : `bg-darkbg`
          }   flex justify-between items-center rounded-md flex-grow p-1 px-2`}
        >
          <i className="bi bi-search text-theme text-xs pr-1">
            <input
              type="text"
              value={findTag}
              onChange={(e)=>setFindTag(e.target.value)}
              className={`${
                handleCurrentTheme() ? `bg-[#f1f5f9]` : `bg-darkbg`
              } ml-2  text-sm w-96 outline-none  `}
              placeholder="Search a tag..."
            />
          </i>

          <button
            className="  bg-theme rounded-md p-1   "
            onClick={() => setAddTag(true)}
          >
            <i className="bi bi-plus text-white text-base">
              <span className="font-normal text-base not-italic ml-[1px] ">
                Add Tags
              </span>
            </i>
          </button>
        </div>

        <div
          className={`flex flex-col gap-3 justify-start rounded-md  h-full p-3 ${
            handleCurrentTheme() ? `bg-[#f1f5f9]` : `bg-darkbg`
          }`}
        >
          {tagArray.length === 0 && (
            <div className="flex flex-col items-center gap-3 justify-center rounded-md  h-full  bg-[#f1f5f9]">
              <i className="bi bi-tags text-black text-6xl font-bold"></i>
              <p className="text-3xl font-semibold">No Tags Found</p>
              </div>
          )}
          {
            tagArray.length!==0 && (
              <TagList findTag={findTag}/>
            )
          }

        </div>
      </div>
    </>
  );
};

export default FindTag;

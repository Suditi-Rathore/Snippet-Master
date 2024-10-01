"use client";

import { useProvider } from "@/context/UserContext";

const TagBar = () => {
  const { handleCurrentTheme,setAddTag ,tagArray} = useProvider();
  return (
    <div
      className={`w-full flex justify-between mt-5 rounded-md p-4 ${
        handleCurrentTheme() ? `bg-white text-black` : "bg-darkcomp text-white"
      }`}
    >
      <div className="flex gap-2">
        <button className="py-1 px-4 bg-theme text-white rounded-md">All</button>
        {tagArray.map((tag)=>(
          <button key={tag.id} className="py-1 px-3 bg-gray-200 text-gray-700 rounded-md">{tag.tag}</button>
        ))

        }
      </div>
      <button onClick={()=>setAddTag(true)} className=" py-1 px-4 bg-theme text-white rounded-md">
        Add Tag

      </button>
    </div>
  );
};

export default TagBar;

"use client";
import { useProvider } from "@/context/UserContext";
import { useState } from "react";

const EditTag = () => {
  const { setEditingTag, editTagText, handleTagEditSave } = useProvider();
  const [editText, setEditText] = useState<string>(editTagText);

  return (
    <div className="w-[28%] h-[22%] shadow-2xl flex flex-col gap-4 fixed top-52 left-0 py-3 px-4 rounded-md right-0 ml-auto z-40 mr-auto bg-white border-2 border-gray-200">
      <div className="flex justify-between">
        <h2 className="font-bold text-lg text-gray-600">Edit Tag</h2>
        <button onClick={() => setEditingTag(false)}>
          <i className="bi bi-x-lg text-gray-500 hover:bg-slate-200 p-2 rounded-full "></i>
        </button>
      </div>

      <div>
        <label className="text-sm text-gray-400 font-semibold ">Tag Name</label>
        <input
          type="text"
          placeholder="For Example, Login Form"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="outline-none text-sm text-gray-400 mt-1 p-2 w-full border-[1px] border-gray-200 rounded-md"
        />
      </div>

      <div className="flex gap-2">
        <button
          className="w-full border-2 border-gray-200 rounded-md text-sm p-2"
          onClick={() => setEditingTag(false)}
        >
          Cancel
        </button>
        <button
          className="w-full border-2 border-theme bg-theme text-sm text-white rounded-md p-2"
          onClick={() => {
            handleTagEditSave(editText), setEditingTag(false);
          }}
        >
          Edit Tag
        </button>
      </div>
    </div>
  );
};

export default EditTag;

"use client";
import React, { useState } from "react";
import { useProvider } from "@/context/UserContext";

type tag={
  id:string,
  tag:string,
}[];
const AddSnip = () => {
  const { createSnippet, setCreateSnippet, language, setNewNode, tagArray } =
    useProvider();
  const [copy, setCopy] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [discription, setDiscription] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [tag, setTag] = useState<tag>([]);
  const [lang, setLang] = useState<string>("");
  const [isTagOpen, setisTagOpen] = useState<boolean>(false);

  const handleSelectedTags = (t: {id:string,tag:string}) => {
    if (tag.includes(t)) {
      setTag(tag.filter((p) => p !== t));
    } else {
      setTag([...tag, t]);
    }
  };

  return (
    <div
      className={`${
        createSnippet ? `block` : `hidden`
      } w-[50%] max-h-[75vh] h-[74vh] shadow-2xl bg-white p-3 flex flex-col gap-8 rounded-xl`}
    >
      <div className="flex justify-between items-center gap-3">
        <i className="bi bi-align-top text-gray-500 "></i>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New Title..."
          className="w-full outline-none text-black font-bold text-xl"
        />
        <button
          onClick={() => {
            if (title.trim().length) {
              setNewNode(() => ({
                title: title,
                tag: tag,
                discription: discription,
                lang: lang,
                code: code,
              }));
            }

            setCode("");
            setDiscription("");
            setLang("");
            setTitle("");
            setTag([]);
            setCreateSnippet(false);
          }}
        >
          <i className="bi bi-check-lg text-gray-400 hover:bg-slate-200 p-1 rounded-md"></i>
        </button>
        <button
          onClick={() => {
            setCreateSnippet(false);
            setCopy(false);
          }}
        >
          <i className="bi bi-x-lg text-gray-400 hover:bg-slate-200 p-1 rounded-md "></i>
        </button>
      </div>

      <div className="relative flex items-center justify-start gap-3 ">
        <i className="bi bi-tags text-gray-400 "></i>
        <div className="rounded-md  bg-[#f1f5f9] flex gap-2">
          {tag.length === 0 && (
            <div className="p-1 rounded-md text-sm bg-[#f1f5f9] text-gray-400">
              No Tags
            </div>
          )}
          {tag.length !== 0 &&
            tag.map((t) => (
              <div className="py-1 px-2 bg-gray-200 text-sm text-gray-500 rounded-md">
                {t.tag}
              </div>
            ))}
        </div>
        <button onClick={() => setisTagOpen(!isTagOpen)}>
          <i className="bi bi-pencil text-gray-400"></i>
        </button>
        {isTagOpen && (
          <ul className="absolute top-10 left-8 space-y-3 p-5 w-[50%] bg-slate-100 rounded-md shadow-xl">
            {tagArray.map((t) => (
              <li
                key={t.id}
                className={`cursor-pointer text-gray-500 hover:bg-slate-300 p-2 rounded-md pr-10 text-sm ${
                  tag.includes(t) ? "bg-slate-300" : ""
                }`}
                onClick={() => handleSelectedTags(t)}
              >
                {t.tag}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex gap-3">
        <i className="bi bi-file-earmark text-gray-400"></i>
        <input
          type="text"
          value={discription}
          onChange={(e) => setDiscription(e.target.value)}
          placeholder="New Discription..."
          className="w-full hover:border-theme border-[1px] outline-none border-gray-300 rounded-md text-sm p-1 pb-6"
        />
      </div>

      <div className="flex gap-3">
        <i className="bi bi-braces text-gray-400"></i>

        <div className="border-[1px] hover:border-theme border-gray-300 h-96 w-full flex flex-col gap-4 rounded-md  p-3">
          <div className="flex  justify-between items-center">
            <select
              name="language"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              id="language"
              className="outline-none py-1 px-2 rounded-md text-gray-400 text-sm bg-[#f1f5f9]"
            >
              {language.map((language) => (
                <option id={language} key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
            <button
              className="hover:bg-slate-200 py-1 px-2 rounded-xl"
              onClick={() => {
                setCopy(true);
              }}
            >
              {!copy && <i className="bi bi-copy"></i>}
              {copy && <i className="bi bi-check-all"></i>}
            </button>
          </div>
          <textarea
            rows={10}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Add your code here..."
            className="outline-none text-sm pl-1 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AddSnip;

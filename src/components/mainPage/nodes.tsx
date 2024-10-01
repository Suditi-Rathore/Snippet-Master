"use client";
import React from "react";
import { useProvider } from "@/context/UserContext";

const Nodes = () => {
  const { createSnippet, nodeArray } = useProvider();
  return (
    <div
      className={`${
        createSnippet ? `w-[50%]` : `w-full`
      } grid  gap-4 `}
    >
      {nodeArray.map((note) => (
        <div
          className="border-2 w-1/4 border-slate-400 flex gap-1 flex-col justify-start items-center text-left "
          id={note.title}
        >
          <div className="flex">
          <h1>{note.title}</h1>
          <button className="bi bi-heart-fill" ></button>
          </div>
          
          <h2>{note.tag.map((t) => {if(t){return t.tag} else {return <h2>No Tag</h2>}})}</h2>
          <h5>{note.lang}</h5>
          <p>{note.code}</p>
        </div>
      ))}
    </div>
  );
};

export default Nodes;

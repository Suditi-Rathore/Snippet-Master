"use client";
import { useProvider } from "@/context/UserContext";

type TagListProps = {
    findTag: string;
  };

const TagList: React.FC<TagListProps> = ({ findTag }) => {
  const { tagArray, setEditingTag, handleTagEdit, handleTagDelete } = useProvider();

  const filteredTags = tagArray.filter((tag) =>
    tag.tag.toLowerCase().includes(findTag.toLowerCase())
  );
  return (
    <>
      {
        filteredTags.map((tag)=> (
        <div key={tag.id} className="flex justify-between items-center w-full rounded-md  px-2 py-1 bg-white">
          <div className="flex justify-center items-center gap-4">
            <i className="bi bi-flower2 text-theme"></i>

            <div className="flex flex-col ">
              <p className=" font-bold text-black">{tag.tag}</p>
              <p className="text-sm text-slate-400">0 snippets</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              className="bi bi-pencil-fill text-slate-500 rounded-full bg-slate-200 p-1 px-2"
              onClick={() => {
                setEditingTag(true);
                handleTagEdit(tag);
              }}
            ></button>

            <button
              className="bi bi-trash3-fill text-slate-500 rounded-full bg-slate-200 p-1 px-2"
              onClick={() => handleTagDelete(tag.id)}
            ></button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TagList;

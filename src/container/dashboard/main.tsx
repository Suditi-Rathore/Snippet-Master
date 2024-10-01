"use client";

import { useProvider } from "@/context/UserContext";
import Head from "@/components/mainPage/head";
import TagBar from "@/components/mainPage/tagBar";
import MiddleBody from "@/components/mainPage/middleBody";
import FindTag from "@/components/tagsDialog/findTag";
import AddTag from "@/components/tagsDialog/addTag";
import EditTag from "@/components/tagsDialog/editTag";

const MainPage = () => {
  const { handleCurrentTheme, tagStatus, addTag,editingTag } = useProvider();
  

  return (
    <div
      className={`w-10/12 min-h-[100vh] p-5 ${
        handleCurrentTheme() ? `bg-[#f1f5f9]` : `bg-darkbg`
      }`}
    >
      <Head />
      <TagBar />
      <MiddleBody />

      {tagStatus && <FindTag />}
      {editingTag && <EditTag/>}

      {addTag && <AddTag />}

    </div>
  );
};

export default MainPage;

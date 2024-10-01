"use client";

import { useProvider } from "@/context/UserContext";

const SideBar = () => {
  const {
    quickLink,
    handleQuickLinkClick,
    handleOptionLinkClick,
    optionLink,
    languageUsed,
    handleCurrentTheme,
    tagStatus,
  } = useProvider();

  
  
  
  return (
    <div
      className={`w-2/12 max-h-[100vh]  p-3 ${
        handleCurrentTheme() ? `bg-white` : "bg-darkcomp"
      }`}
    >
      <div className="flex  items-center gap-1 lg:gap-2 mb-20 mt-5">
        <div className=" bg-theme text-white lg:text-xl text-xs rounded-md px-3 py-2">
          <i className="bi bi-scissors"></i>
        </div>
        <span className=" font-bold lg:text-2xl text-base text-gray-500 lg:block text-nowrap">
          <span className="text-theme">Snippet</span> Master
        </span>
      </div>

      <div className="pb-10">
        <h3 className="text-gray-400 font-semibold px-1">Quick Links</h3>
        <ul className="m-5 text-theme space-y-3 my-5">
          {quickLink.map((list) => (
            <li key={list.id}>
              <button
                onClick={() => handleQuickLinkClick(list.id)}
                className={`cursor-pointer py-2 px-3 text-left  ${
                  list.isSelected
                    ? "bg-theme text-white"
                    : handleCurrentTheme()
                    ? "bg-white text-theme"
                    : "bg-darkcomp text-gray-400"
                }
                 block w-full rounded-md  hover:bg-theme  hover:text-white`}
              >
                {list.icon} {list.name}
              </button>
            </li>
          ))}
        </ul>

        <ul className="p-5 text-theme space-y-3">
          {optionLink.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleOptionLinkClick(link.id)}
                className={`cursor-pointer py-2 px-3 text-left  ${
                  link.isSelected
                    ? "bg-theme text-white"
                    : handleCurrentTheme()
                    ? "bg-white text-theme"
                    : "bg-darkcomp text-gray-400"
                } block w-full rounded-md  hover:bg-theme  hover:text-white`}
              >
                {link.icon}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-gray-400 font-semibold px-1">Languages</h3>
        <ul className="text-gray-400 m-5 space-y-3">
          {languageUsed.map((link) => (
            <li key={link.id} className="flex justify-between">
              <span>
                {link.icon}
                {link.name}
              </span>
              <span className="font-semibold">{link.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

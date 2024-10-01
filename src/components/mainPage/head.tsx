
import { useProvider } from "@/context/UserContext";

const Head = () => {
  const { user, handleTheme, handleCurrentTheme,setCreateSnippet } = useProvider();

  return (
    <div
      className={`flex w-full p-3 justify-between gap-32 ${
        handleCurrentTheme() ? `bg-white` : `bg-darkcomp`
      }  rounded-md`}
    >
      <div className="flex ">
        <div className="w-9 h-9 rounded-full mr-3">
          <img
            src={user?.imageUrl}
            alt="hh"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div>
          <h5
            className={`font-bold text-sm ${
              handleCurrentTheme() ? `text-black` : `text-white `
            }  `}
          >
            {user?.fullName}
          </h5>
          <p className="text-xs text-gray-500">
            {user?.emailAddresses[0].emailAddress}
          </p>
        </div>
      </div>

      <div
        className={`${
          handleCurrentTheme() ? `bg-[#f1f5f9]` : `bg-darkbg`
        } rounded-full   flex justify-between items-center flex-grow p-2`}
      >
        <i className="bi bi-search text-theme text-xs pr-1">
          <input
            type="text"
            className={`${
              handleCurrentTheme() ? `bg-[#f1f5f9]` : `bg-darkbg`
            } ml-2  text-sm w-96 outline-none  `}
            placeholder="Search a snippet..."
          />
        </i>

        <button className="  bg-theme rounded-full px-2  "
        onClick={() => setCreateSnippet(true)}>
          <i className="bi bi-plus text-white">
            <span className="font-normal text-sm not-italic ml-1 ">
              Snippet
            </span>
          </i>
        </button>
      </div>

      <div className="rounded-full p-1 flex justify-between items-center bg-[#f1f5f9] gap-4">
        <button
          className={`rounded-full ${
            handleCurrentTheme()
              ? `bg-theme text-[#f1f5f9]`
              : `bg-[#f1f5f9] text-theme `
          }  px-1`}
          id="light"
          onClick={() => handleTheme("light")}
        >
          <i className="bi bi-brightness-high-fill  text-lg"></i>
        </button>
        <button
          className={`rounded-full ${
            !handleCurrentTheme()
              ? `bg-theme text-[#f1f5f9]`
              : `bg-[#f1f5f9] text-theme `
          }   px-1`}
          id="dark"
          onClick={() => handleTheme("dark")}
        >
          <i className="bi bi-moon-stars-fill text-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default Head;

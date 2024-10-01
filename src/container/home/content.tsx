"use client";


const HomeContent = () => {
  return (
    <div className="flex flex-col justify-center mt-5 gap-8">
      <div className="text-center p-12 lg:px-0 lg:w-[60%] mx-auto  xl:w-[40%]">
        <h2 className="font-bold text-black text-xl lg:text-3xl mb-1">
          {" "}
          Organize Your Code Snippets with Grace!
        </h2>
        <p className="text-base lg:text-xl text-gray-500">
          With our advanced tagging and search features, you can quickly find
          the snippet you need, right when you need it. Spend less time in
          searching for code and more time in writing it.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="">
          <h3 className="text-xl lg:text-3xl text-black font-semibold">
            Why choose Snippet Master ?
          </h3>
          <ul className="list-disc list-inside ">
            <li>Auto-Save Snippets</li>
            <li>Advanced Snippet Tagging</li>
            <li>Manage All Snippets at one place</li>
            <li>Multi-Language Support</li>
            <li>AI Enabled Code Completion</li>
          </ul>
        </div>
        <img src="/images/Home.png" alt="Image" className=" lg:w-[50%]" />
      </div>
    </div>
  );
};

export default HomeContent;

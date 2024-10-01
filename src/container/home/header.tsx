"use client";

import { useAuth } from "@clerk/nextjs";
import { SignedOut, SignInButton, SignedIn } from "@clerk/nextjs";
import Link from "next/link";

const HomeHeader = () => {
  const data = useAuth();

  return (
    <div className="flex items-center justify-between p-2 lg:p-4 ">
      <div className="flex gap-1 lg:gap-2">
        <div className=" bg-theme text-white xl:text-xl text-base rounded-md px-2 py-1">
          <i className="bi bi-scissors"></i>
        </div>
        <span className=" font-bold lg:text-3xl hidden lg:block ">
          <span className="text-theme">Snippet</span> Master
        </span>
      </div>
      <div className="flex gap-1 lg:gap-2 text-nowrap lg:px-4 lg:py-2 px-2 py-2 text-xs lg:text-base  bg-theme text-white border-2 border-theme rounded-md">
        {!data.isSignedIn && (
          <SignedOut>
            <SignInButton />
          </SignedOut>
        )}
        {data.isSignedIn && (
          <SignedIn>
            <Link href="/dashboard">
              <button type="button">Access the app</button>
            </Link>
          </SignedIn>
        )}
      </div>
    </div>
  );
};

export default HomeHeader;

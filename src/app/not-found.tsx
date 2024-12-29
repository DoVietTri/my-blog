import { MyLink } from "@/components/MyLink";
import { NextPage } from "next";
import React from "react";

const ThePage: NextPage = () => {
  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-3xl font-bold">404</h1>
      <div>
        <h4 className="text-center text-xl">PAGE NOT FOUND !</h4>
        <span className="text-center">
          You seem to be trying to find his way home
        </span>
      </div>
      <MyLink className="flex items-center gap-2" href="/">
        <span>Back to home</span>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </MyLink>
    </div>
  );
};

export default ThePage;

"use client";

import React, { useState } from "react";
import { MyLink } from "./MyLink";
import { MyDrawer } from "./MyDrawer";
import { menu } from "@/constants";

export const MyHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="h-16 flex justify-between items-center py-2 px-4 bg-[#242526] sticky top-0 z-10">
        <div className="flex gap-2 items-center">
          <button onClick={() => setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 block lg:hidden cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <MyLink href="/">
            <h1 className="text-2xl font-extrabold cursor-pointer uppercase transition">
              EZ Code
            </h1>
          </MyLink>
        </div>
        <ul className="list-none hidden lg:flex flex-row gap-4">
          {menu.map((item) => (
            <li key={item.link} className="font-medium text-xl">
              <MyLink href={item.link}>{item.title}</MyLink>
            </li>
          ))}
        </ul>
        <div className="h-12 w-12 rounded-full bg-slate-500" />
      </header>
      <MyDrawer open={open} setOpen={setOpen} />
    </>
  );
};

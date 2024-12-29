import clsx from "clsx";
import React from "react";
import { MyLink } from "./MyLink";
import { menu } from "@/constants";

interface MyDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const MyDrawer = ({ open, setOpen }: MyDrawerProps) => {
  return (
    <div
      id="drawer"
      className="relative z-10"
      aria-labelledby="slide-over"
      role="dialog"
      aria-modal="true"
      onClick={() => setOpen(!open)}
    >
      <div
        className={clsx(
          "fixed inset-0 bg-[#414141] bg-opacity-75 transition-all",
          {
            "opacity-100 duration-500 ease-in-out visible": open,
          },
          { "opacity-0 duration-500 ease-in-out invisible": !open }
        )}
      ></div>
      <div className={clsx({ "fixed inset-0 overflow-hidden": open })}>
        <div className="absolute inset-0">
          <div className="w-3/4 pointer-events-none fixed max-w-full inset-y-0 left-0">
            <div
              className={clsx(
                "pointer-events-auto relative w-full h-full transform transition ease-in-out duration-500",
                { "-translate-x-full": !open },
                { "translate-x-0": open }
              )}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
              }}
            >
              <div className="flex flex-col h-full bg-[#242526] shadow-xl">
                <div className="h-16 py-2 px-4 flex justify-between items-center">
                  <MyLink href="/" onClick={() => setOpen(false)}>
                    <h1 className="text-2xl font-extrabold cursor-pointer uppercase transition">
                      EZ Code
                    </h1>
                  </MyLink>
                  <button onClick={() => setOpen(false)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <ul className="list-none flex flex-col gap-4">
                    {menu.map((item) => (
                      <li className="font-medium text-xl" key={item.link}>
                        <MyLink
                          className="flex flex-row items-center gap-2"
                          href={item.link}
                          onClick={() => setOpen(false)}
                        >
                          <span>{item.title}</span>
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
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

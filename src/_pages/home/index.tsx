import { MyLink } from "@/components/MyLink";
import React from "react";

export const Home = () => {
  return (
    <div className="h-60 flex flex-col justify-center items-center gap-5 bg-[#f6bd60]">
      <h1 className="text-black font-extrabold text-4xl">Easy Code</h1>
      <p className="text-black text-2xl">Code xịn hơn mỗi ngày</p>
      <MyLink href="/blog">
        <button className="text-xl border px-3 py-1 font-bold rounded-md hover:bg-white hover:text-black transition-all">
          Bắt đầu ngay
        </button>
      </MyLink>
    </div>
  );
};

import { MyLink } from "@/components/common/MyLink";
import Image from "next/image";
import React from "react";
import TreeImg from "@/assets/images/tree.svg";
import MountainImg from "@/assets/images/mountain.svg";
import ReactImg from "@/assets/images/react.svg";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 bg-[#f6bd60] py-16">
        <h1 className="text-black font-extrabold text-5xl uppercase">
          Easy Code
        </h1>
        <p className="text-black text-2xl">Code xịn hơn mỗi ngày !</p>
        <MyLink href="/blog">
          <button className="btn btn-primary btn-outline min-w-40">
            Bắt đầu ngay
          </button>
        </MyLink>
      </div>
      <div className="py-16 container mx-auto flex flex-col md:flex-row gap-y-6 justify-center">
        <div className="w-full md:w-1/3 px-6 flex flex-col gap-4 items-center">
          <div className="min-h-40">
            <Image src={TreeImg} width={200} height={200} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-2xl">Tài liệu kĩ thuật</h3>
            <p>
              Nơi chia sẻ các bài hướng dẫn về kĩ thuật được sử dụng nhiều trong
              dự án thực tế sẽ được mình tổng hợp tại đây 🧑‍🏫
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-6 flex flex-col gap-4 items-center">
          <div className="min-h-40">
            <Image src={MountainImg} width={200} height={200} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-2xl">Blog kiến thức</h3>
            <p>
              Chia sẻ về những kiến thức xung quanh cuộc sống lập trình viên,
              vui, buồn, sướng khổ, đủ mùi vị cuộc sống lập trình viên 🙂
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-6 flex flex-col gap-4 items-center">
          <div className="min-h-40">
            <Image src={ReactImg} width={200} height={200} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-2xl">Quiz Game</h3>
            <p>
              Mình dự định sẽ tạo ra các bộ câu hỏi, các kiến thức liên quan đến
              Frontend để mọi người vừa học vừa ôn lại kiến thức. Rất mong được
              sự đón nhận từ mọi người 😍
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

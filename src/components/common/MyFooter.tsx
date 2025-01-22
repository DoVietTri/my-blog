import { getRecentPostAction } from "@/actions/post";
import React from "react";
import { MyLink } from "./MyLink";
import ArrowTopRightIcon from "@/assets/icons/arrow-top-right.svg";
import Image from "next/image";

export const MyFooter = async () => {
  const posts = await getRecentPostAction({ size: 5 });

  return (
    <footer className="bg-[#303846]">
      <div className="py-14 container mx-auto flex flex-col md:flex-row gap-y-6 justify-center">
        <div className="w-full md:w-1/3 px-6 flex flex-col gap-4">
          <h3 className="font-bold text-xl">Blogs</h3>
          <ul className="list-none flex flex-col flex-wrap gap-2">
            {posts.map((post) => (
              <li key={post.id} className="text-wrap">
                <MyLink href={`/blog/${post.slug}`}>{post.title}</MyLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3 px-6 flex flex-col gap-4">
          <h3 className="font-bold text-xl">Kết nối</h3>
          <ul className="list-none flex flex-col flex-wrap gap-2">
            <li className="text-wrap">
              <MyLink
                href={`https://www.facebook.com/tri.doviet.3`}
                target="_blank"
                className="flex gap-2"
              >
                <span>Facebook cá nhân</span>
                <Image src={ArrowTopRightIcon} width={24} height={24} alt="" />
              </MyLink>
            </li>
            <li className="text-wrap">
              <MyLink
                href={`https://github.com/DoVietTri/my-blog`}
                target="_blank"
                className="flex gap-2"
              >
                <span>Github</span>
                <Image src={ArrowTopRightIcon} width={24} height={24} alt="" />
              </MyLink>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 px-6 flex flex-col gap-4">
          <h3 className="font-bold text-xl">Tài liệu kỹ thuật</h3>
          <ul className="list-none flex flex-col flex-wrap gap-2">
            <li className="text-wrap">Tobe continue...</li>
          </ul>
        </div>
      </div>
      <div className="text-center py-2">Copyright © 2025 by Easy code.</div>
    </footer>
  );
};

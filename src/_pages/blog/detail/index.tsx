"use client";
import { IPostData } from "@/interfaces/post";
import React from "react";

interface BlogDetailProps {
  post: IPostData;
}

export const BlogDetail = ({ post }: BlogDetailProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl md:text-4xl">{post.title}</h1>

      <div className="flex gap-2">
        <div className="avatar">
          <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full font-bold text-[#f6bd60]">
            {post.author.name}
          </div>
          <div className="w-full">{post.author.email}</div>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

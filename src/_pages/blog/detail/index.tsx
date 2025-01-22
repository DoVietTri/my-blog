"use client";
import { MyFeedback } from "@/components/common/MyFeedback";
import { IPostData } from "@/interfaces/post";
import Image from "next/image";
import React from "react";

interface BlogDetailProps {
  post: IPostData;
}

export const BlogDetail = ({ post }: BlogDetailProps) => {
  return (
    <div className="mb-4">
      <h1 className="text-2xl md:text-4xl">{post.title}</h1>

      <div className="flex gap-2 mt-4">
        <div className="avatar">
          <div className="w-14 rounded-full">
            <Image src={post.author.avatar} alt="" width={56} height={56} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full font-bold text-[#f6bd60]">
            {post.author.name}
          </div>
          <div className="w-full">{post.author.email}</div>
        </div>
      </div>

      <div
        className="post-content mt-6"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <MyFeedback />
    </div>
  );
};

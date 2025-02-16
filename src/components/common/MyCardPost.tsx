import React from "react";
import { MyLink } from "./MyLink";
import Image from "next/image";
import PostImage from "@/assets/images/post-image.png";
import { IPostData } from "@/interfaces/post";

interface MyCardPostProps {
  post: IPostData;
}

const MyCardPost = ({ post }: MyCardPostProps) => {
  return (
    <div className="flex flex-col gap-2 p-4 w-full lg:w-[600px] transition">
      <div className="flex gap-4 items-center">
        <div className="avatar">
          <div className="w-10 rounded-xl">
            <Image src={post.author.avatar} width={40} height={40} alt="" />
          </div>
        </div>
        <div>
          <MyLink href={`/blog/${post.slug}`} className="hover:underline">
            <h3 className="text-2xl font-medium">{post.title}</h3>
          </MyLink>
          <div>
            Created by:{" "}
            <span className="text-[#f6bd60] font-medium">
              {post.author.name}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="line-clamp-3">{}</p>
        <Image src={post.image || PostImage} alt="" />
      </div>
      <div className="flex flex-row justify-between mt-1">
        <div></div>
        <div>
          <MyLink
            href={`/blog/${post.slug}`}
            className="flex items-center flex-row gap-1 hover:underline"
          >
            <span className="text-[#f6bd60]">Read more</span>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#f6bd60"
                className="size-5"
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
      </div>
    </div>
  );
};

export default MyCardPost;

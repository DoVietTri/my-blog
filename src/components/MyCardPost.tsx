import React from "react";
import { MyLink } from "./MyLink";
import Image, { StaticImageData } from "next/image";
import PostImage from "@/assets/images/post-image.jpg";

interface MyCardPostProps {
  title: string;
  slug: string;
  shortDesc?: string;
  picture?: string | StaticImageData;
  author: string;
}

const MyCardPost = ({
  title,
  slug,
  author,
  shortDesc,
  picture = PostImage,
}: MyCardPostProps) => {
  return (
    <div className="flex flex-col gap-2 p-4 w-full lg:w-[600px] transition">
      <div className="flex gap-4 items-center">
        <div>
          <div className="h-12 w-12 rounded-full bg-slate-500" />
        </div>
        <div>
          <MyLink href={`/blog/${slug}`} className="hover:underline">
            <h3 className="text-2xl font-medium">{title}</h3>
          </MyLink>
          <div>
            Created by:{" "}
            <span className="text-[#f6bd60] font-medium">{author}</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="line-clamp-3">{shortDesc}</p>
        <Image src={picture} alt="" />
      </div>
      <div className="flex flex-row justify-between mt-1">
        <div></div>
        <div>
          <MyLink
            href="/"
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

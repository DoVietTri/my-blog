import MyCardPost from "@/components/common/MyCardPost";
import { IGetPostsDataResponse } from "@/interfaces/post";
import React from "react";

interface BlogsProps {
  postsData: IGetPostsDataResponse;
}

export const Blogs = ({ postsData }: BlogsProps) => {
  return (
    <div>
      {postsData?.posts?.map((post) => (
        <MyCardPost post={post} key={post.id} />
      ))}
    </div>
  );
};

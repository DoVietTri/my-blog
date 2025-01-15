import { NextPage } from "next";
import React from "react";
import { Blogs } from "@/_pages/blog";
import { getPostsAction } from "@/actions/post";

const ThePage: NextPage = async () => {
  const postsData = await getPostsAction({ page: 1, size: 10 });

  return <Blogs postsData={postsData} />;
};

export default ThePage;

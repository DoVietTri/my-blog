import { Post } from "@/_pages/admin/posts";
import { getPostsAction } from "@/actions/post";
import { NextPage } from "next";
import React from "react";

const ThePage: NextPage = async () => {
  const postsData = await getPostsAction({ page: 1, size: 10 });

  const refetch = async () => {
    "use server";
    await getPostsAction({ page: 1, size: 10 });
  };

  return <Post postsData={postsData} refetch={refetch} />;
};

export default ThePage;

import { BlogDetail } from "@/_pages/blog/detail";
import { getPostDetailBySlugAction } from "@/actions/post";
import { NextPage } from "next";
import React from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

const ThePage: NextPage<Props> = async ({ params }) => {
  const { slug } = await params;
  const post = await getPostDetailBySlugAction(slug);

  return <BlogDetail post={post} />;
};

export default ThePage;

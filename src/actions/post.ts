"use server";

import {
  IGetPostsPayload,
  IGetRecentPostsPayload,
  IPostData,
  IPostPayload,
  IGetRecentPostDataResponse,
  IGetPostBySlugDataResponse,
  IGetPostsDataResponse,
} from "@/interfaces/post";
import api from "@/utils/api";

export const createPostAction = async (payload: IPostPayload) => {
  await api.post("/posts", payload);
};

export const getPostsAction = async (params: IGetPostsPayload) => {
  const data = (await api.get("/posts", { params }))
    .data as IGetPostsDataResponse;

  return data;
};

export const getRecentPostAction = async (params: IGetRecentPostsPayload) => {
  const data = (await api.get("/posts/recent", { params }))
    .data as IGetRecentPostDataResponse;

  return data.data as IPostData[];
};

export const getPostDetailBySlugAction = async (slug: string) => {
  const data = (await api.get(`/posts/${slug}`))
    .data as IGetPostBySlugDataResponse;

  return data.data as IPostData;
};

"use server";

import {
  IGetPostsPayload,
  IGetRecentPostsPayload,
  IPostData,
  IPostPayload,
  IGetPostsDataResponse,
} from "@/interfaces/post";
import api from "@/utils/api";

export const createPostAction = async (payload: IPostPayload) => {
  await api.post("/posts", payload);
};

export const updatePostAction = async (id: number, payload: IPostPayload) => {
  await api.put(`/posts/${id}`, payload);
};

export const getPostsAction = async (params: IGetPostsPayload) => {
  const data = await api.get("/posts", { params });

  return data.data as IGetPostsDataResponse;
};

export const getRecentPostAction = async (params: IGetRecentPostsPayload) => {
  const data = await api.get("/posts/recent", { params });

  return data.data as IPostData[];
};

export const getPostDetailBySlugAction = async (slug: string) => {
  const data = await api.get(`/posts/${slug}`);

  return data.data as IPostData;
};

import { IPaginationData } from "./pagination";

// -------------Payload-----------------------
export interface IPostPayload {
  image: string;
  title: string;
  content: string;
}

export interface IGetPostsPayload {
  page?: number;
  size?: number;
  q?: string;
}

export interface IGetRecentPostsPayload {
  size?: number;
}
// ------------End Payload-------------------------

// --------------------Response--------------------
export interface IAuthorData {
  id: number;
  name: string;
  avatar: string;
  email: string;
  role: string;
}

export interface IPostData {
  id: number;
  title: string;
  slug: string;
  image: string;
  content: string;
  createdAt: Date | string;
  author: IAuthorData;
}

export interface IGetRecentPostDataResponse {
  data: IPostData[];
}

export interface IGetPostBySlugDataResponse {
  data: IPostData;
}

export interface IGetPostsDataResponse extends IPaginationData {
  posts: IPostData[];
}

// ------------End Response-------------------------

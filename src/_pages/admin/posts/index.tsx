"use client";

import { CreateOrEditPostDialog } from "@/components/CreateOrEditPostDialog";
import { DIALOG_ID } from "@/constants";
import { IGetPostsDataResponse, IPostData } from "@/interfaces/post";
import defaultAvatar from "@/assets/images/default-avatar.png";
import Image from "next/image";
import React, { useState } from "react";
import { MyPagination } from "@/components/common/MyPagination";

interface PostProps {
  postsData: IGetPostsDataResponse;
  refetch: () => Promise<void>;
}

export const Post = ({ postsData, refetch }: PostProps) => {
  const [dataEdit, setDataEdit] = useState<IPostData | null>();

  const handleShowDialog = () => {
    const post = document.getElementById(
      DIALOG_ID.CREATE_OR_EDIT_POST
    ) as HTMLDialogElement;
    post?.showModal();
  };

  const handleHideDialog = () => {
    const post = document.getElementById(
      DIALOG_ID.CREATE_OR_EDIT_POST
    ) as HTMLDialogElement;
    post.close();
    setDataEdit(null);
  };

  const handleOpenCreate = () => {
    handleShowDialog();
  };

  const handleOpenEdit = (postData: IPostData) => {
    setDataEdit(postData);
    handleShowDialog();
  };

  const handleChangePage = (page: number) => {
    console.log("page", page);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Quản lý bài viết</h1>
        <button className="btn btn-primary" onClick={handleOpenCreate}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Tạo bài viết
        </button>
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Tác giả</th>
              <th>Tiêu đề</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {postsData?.posts?.map((post) => (
              <tr key={post.id}>
                <td>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </td>
                <td>
                  <div className="flex gap-2">
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <Image
                          src={post.author.avatar || defaultAvatar}
                          alt="avatar"
                        />
                      </div>
                    </div>
                    <div>
                      <div>{post.author.name}</div>
                      <div>{post.author.email}</div>
                    </div>
                  </div>
                </td>
                <td>{post.title}</td>
                <td>
                  <div className="flex gap-2">
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleOpenEdit(post)}
                    >
                      Chi tiết
                    </button>
                    <button className="btn btn-error btn-xs">Xóa</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <MyPagination
        currentPage={postsData.currentPage}
        totalPage={postsData.totalPage}
        onChange={handleChangePage}
      />

      <CreateOrEditPostDialog
        dialogId={DIALOG_ID.CREATE_OR_EDIT_POST}
        defaultValues={dataEdit}
        onClose={handleHideDialog}
        refetch={refetch}
      />
    </>
  );
};

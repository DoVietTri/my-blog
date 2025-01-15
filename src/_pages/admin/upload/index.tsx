"use client";

import React from "react";
import { UploadDialog } from "@/components/UploadDialog";
import { DIALOG_ID } from "@/constants";

export const Upload = () => {
  const handleShowDialog = () => {
    const post = document.getElementById(DIALOG_ID.UPLOAD) as HTMLDialogElement;
    post?.showModal();
  };

  const handleHideDialog = () => {
    const post = document.getElementById(DIALOG_ID.UPLOAD) as HTMLDialogElement;
    post.close();
  };

  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">Quản lý ảnh tải lên</h1>
          <button className="btn btn-primary" onClick={handleShowDialog}>
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
            Tải lên
          </button>
        </div>
      </div>
      <UploadDialog dialogId={DIALOG_ID.UPLOAD} onClose={handleHideDialog} />
    </>
  );
};

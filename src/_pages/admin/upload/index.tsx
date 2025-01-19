"use client";

import React, { useState } from "react";
import { DIALOG_ID } from "@/constants";
import { CropperDialog } from "@/components/CropperDialog";
import { uploadAction } from "@/actions/upload";
import { IGetMediasDataResponse } from "@/interfaces/upload";
import Image from "next/image";
import CopyIcon from "@/assets/icons/copy.svg";
import TickIcon from "@/assets/icons/tick.svg";
import { MyPagination } from "@/components/common/MyPagination";

interface UploadProps {
  mediasData: IGetMediasDataResponse;
  refetch: () => Promise<void>;
}

export const Upload = ({ mediasData, refetch }: UploadProps) => {
  const [imgPreview, setImgPreview] = useState<string | ArrayBuffer | null>("");
  const [copyId, setCopyId] = useState<number | null>(null);

  const handleClose = () => {
    const cropperDialog = document.getElementById(
      DIALOG_ID.CROPPER
    ) as HTMLDialogElement;
    cropperDialog.close();
  };

  const handleCropImage = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      await uploadAction(formData);
      refetch();
    } catch (error) {
      throw error;
    }
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const cropperDialog = document.getElementById(
      DIALOG_ID.CROPPER
    ) as HTMLDialogElement;
    cropperDialog?.showModal();

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImgPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleChangePage = (page: number) => {
    console.log("page", page);
  };

  const handleCopy = async (id: number, url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopyId(id);
      setTimeout(() => setCopyId(null), 5000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Quản lý ảnh tải lên</h1>
        <label htmlFor="file" className="btn btn-primary">
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
        </label>

        <input
          id="file"
          onChange={(e) => {
            handleChangeFile(e);
          }}
          name="file"
          type="file"
          accept="image/*"
          hidden
        />
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
              <th>Ảnh</th>
              <th>Đường dẫn</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mediasData.medias?.map((media) => (
              <tr key={media.id}>
                <td>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </td>
                <td>
                  <Image
                    src={media.url}
                    width={media.width}
                    height={media.height}
                    style={{
                      width: "auto",
                      height: 100,
                    }}
                    alt=""
                  />
                </td>
                <td>
                  <div className="flex gap-2">
                    <div className="truncate w-1/4">{media.url}</div>
                    <button onClick={() => handleCopy(media.id, media.url)}>
                      <Image
                        src={copyId === media.id ? TickIcon : CopyIcon}
                        width={24}
                        height={24}
                        alt=""
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <MyPagination
        currentPage={mediasData.currentPage}
        totalPage={mediasData.totalPage}
        onChange={handleChangePage}
      />

      <CropperDialog
        dialogId={DIALOG_ID.CROPPER}
        imgPreview={imgPreview as string}
        onClose={handleClose}
        onSubmit={handleCropImage}
      />
    </>
  );
};

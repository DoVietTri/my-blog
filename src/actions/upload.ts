"use server";

import { IUploadData, IUploadResponseData } from "@/interfaces/upload";
import api from "@/utils/api";

export const uploadAction = async (formData: FormData) => {
  const data = (
    await api.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  ).data as IUploadResponseData;

  return data.data as IUploadData;
};

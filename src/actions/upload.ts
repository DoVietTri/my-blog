"use server";

import api from "@/utils/api";

export const uploadAction = async (formData: FormData) => {
  return await api.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

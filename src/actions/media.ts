"use server";

import { IGetMediasDataResponse, IGetMediasPayload } from "@/interfaces/upload";
import api from "@/utils/api";

export const getMediasAction = async (params: IGetMediasPayload) => {
  const data = await api.get("/medias", { params });

  return data.data as IGetMediasDataResponse;
};

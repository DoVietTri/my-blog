import { UploadFolderEnum } from "@/constants";
import { IPaginationData } from "./pagination";

// -------------Payload-----------------------

export interface IGetMediasPayload {
  page?: number;
  size?: number;
}

// ------------End Payload-------------------------

// --------------------Response--------------------
export interface IUploadData {
  id: number;
  url: string;
  type: string;
  folder: UploadFolderEnum;
  format: string;
  width: number;
  height: number;
}

export interface IUploadResponseData {
  data: IUploadData;
}

export interface IGetMediasDataResponse extends IPaginationData {
  medias: IUploadData[];
}

// ------------End Response-------------------------

import { Upload } from "@/_pages/admin/upload";
import { getMediasAction } from "@/actions/media";
import { NextPage } from "next";
import React from "react";

const ThePage: NextPage = async () => {
  const mediasData = await getMediasAction({ page: 1, size: 10 });

  const refetch = async () => {
    "use server";
    await getMediasAction({ page: 1, size: 10 });
  };
  return <Upload mediasData={mediasData} refetch={refetch} />;
};

export default ThePage;

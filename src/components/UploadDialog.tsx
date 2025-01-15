"use client";

import React, { useEffect, useState } from "react";
import { MyDialog } from "./common/MyDialog";
import { Controller, useForm } from "react-hook-form";
import clsx from "clsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { uploadFileSchema } from "@/utils/validationSchema";
import { CropperDialog } from "./CropperDialog";
import { DIALOG_ID } from "@/constants";
import { uploadAction } from "@/actions/upload";
import api from "@/utils/api";

interface UploadDialogProps {
  dialogId: string;
  onClose: () => void;
}

export const UploadDialog = ({ dialogId, onClose }: UploadDialogProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      url: "",
    },
    resolver: yupResolver(uploadFileSchema),
    mode: "all",
  });
  const [imgPreview, setImgPreview] = useState<string | ArrayBuffer | null>("");

  const onSubmit = async (values) => {
    try {
      console.log("values", values);
      onClose();
    } catch (error) {
      console.log("error", error);
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

  const handleCropImage = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      await uploadAction(formData);
      console.log("res");
    } catch (error) {
      // set
    }
  };

  return (
    <>
      <MyDialog
        dialogId={dialogId}
        onSubmit={handleSubmit(onSubmit)}
        onClose={onClose}
      >
        <form className="mt-8 flex flex-col gap-4">
          <Controller
            name="url"
            control={control}
            render={({ field }) => (
              <div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Tải ảnh lên</span>
                  </div>
                  <input
                    autoFocus={false}
                    value={field.value}
                    onChange={(e) => {
                      field.onChange(e);
                      handleChangeFile(e);
                    }}
                    type="file"
                    accept="image/*"
                    className={clsx("file-input file-input-bordered w-full", {
                      "input-error": errors.url,
                    })}
                  />
                </label>
                {errors.url && (
                  <small className="text-red-500">{errors.url.message}</small>
                )}
              </div>
            )}
          />
        </form>
      </MyDialog>

      <CropperDialog
        dialogId={DIALOG_ID.CROPPER}
        imgPreview={imgPreview as string}
        onSubmit={handleCropImage}
      />
    </>
  );
};

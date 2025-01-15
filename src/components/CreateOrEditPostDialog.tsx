"use client";

import { createPostAction } from "@/actions/post";
import { IPostData, IPostPayload } from "@/interfaces/post";
import { createPostSchema } from "@/utils/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { MyEditor } from "./common/MyEditor";
import { MyDialog } from "./common/MyDialog";

interface CreateOrEditPostDialogProps {
  dialogId: string;
  defaultValues?: IPostData | null;
  onClose: () => void;
}

export const CreateOrEditPostDialog = ({
  dialogId,
  defaultValues,
  onClose,
}: CreateOrEditPostDialogProps) => {
  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<IPostPayload>({
    defaultValues: {
      image: "",
      title: "",
      content: "",
    },
    resolver: yupResolver(createPostSchema),
    mode: "all",
  });

  const onSubmit = async (values: IPostPayload) => {
    console.log("values", values);
    // try {
    //   await createPostAction(values);
    //   onClose();
    // } catch (error) {
    //   console.log("error", error);
    // }
  };

  useEffect(() => {
    reset({
      image: defaultValues?.image || "",
      title: defaultValues?.title || "",
      content: defaultValues?.content || "",
    });
  }, [reset, defaultValues]);

  return (
    <MyDialog
      dialogId={dialogId}
      title="Tạo bài viết"
      confirmBtnText={defaultValues ? "Cập nhật" : "Tạo mới"}
      onSubmit={handleSubmit(onSubmit)}
      onClose={onClose}
    >
      <form className="mt-8 flex flex-col gap-9">
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Tiêu đề</span>
                </div>
                <input
                  value={field.value}
                  onChange={field.onChange}
                  autoComplete="off"
                  autoFocus={true}
                  tabIndex={1}
                  type="text"
                  placeholder="Input..."
                  className={clsx("input input-bordered w-full", {
                    "input-error": errors.title,
                  })}
                />
              </label>
              {errors.title && (
                <small className="text-red-500">{errors.title.message}</small>
              )}
            </div>
          )}
        />

        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <div>
              <MyEditor value={field.value} onChange={field.onChange} />
              {errors.content && (
                <small className="text-red-500">{errors.content.message}</small>
              )}
            </div>
          )}
        />
      </form>
    </MyDialog>
  );
};

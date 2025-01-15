import UserIcon from "@/assets/icons/user.svg";
import PostIcon from "@/assets/icons/document.svg";
import UploadIcon from "@/assets/icons/upload.svg";

export const MENU = [
  { title: "Blog", link: "/blog" },
  { title: "About me", link: "/about-me" },
];

export const ADMIN_MENU = [
  {
    title: "Người dùng",
    link: "/admin/users",
    icon: UserIcon,
  },
  {
    title: "Bài viết",
    link: "/admin/posts",
    icon: PostIcon,
  },
  {
    title: "Upload",
    link: "/admin/upload",
    icon: UploadIcon,
  },
];

export const DIALOG_ID = {
  CREATE_OR_EDIT_POST: "createOrEditPost",
  UPLOAD: "upload",
  CROPPER: "cropper",
};

export enum UploadFolderEnum {
  POST = "post",
  USER = "user",
}

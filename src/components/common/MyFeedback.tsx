import Image from "next/image";
import React from "react";
import LikeIcon from "@/assets/icons/like.svg";
import DislikeIcon from "@/assets/icons/dislike.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";

export const MyFeedback = () => {
  return (
    <div>
      <p className="font-bold text-xl md:text-2xl">
        Bạn có thấy bài viết này hữu ích ?
      </p>
      <div className="flex gap-4 mt-2">
        <button className="btn btn-outline btn-sm md:btn-md">
          <Image src={LikeIcon} width={24} height={24} alt="like" />
          <span>Có</span>
        </button>
        <button className="btn btn-outline btn-sm md:btn-md">
          <Image src={DislikeIcon} width={24} height={24} alt="dislike" />
          <span>Không</span>
        </button>
      </div>
      {/* <div className="flex gap-4 items-center">
        <span className="font-bold text-xl md:text-2xl">
          Cảm ơn bạn đã để lại feedback !
        </span>
        <Image src={CheckCircleIcon} width={40} height={40} alt="check" />
      </div> */}
    </div>
  );
};

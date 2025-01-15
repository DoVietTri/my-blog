import React from "react";

export const MyFooter = () => {
  return (
    <footer className="bg-[#303846]">
      <div className="py-14 container mx-auto flex flex-col md:flex-row gap-y-6 justify-center">
        <div className="w-full md:w-1/3 px-6 flex flex-col gap-4">
          <h3 className="font-bold text-xl">Blogs</h3>
          <div>
            <p>Lộ trình học Frontend cho người mới bắt đầu siêu chi tiết 🎯</p>
            <p>Bí kíp cho buổi phỏng vấn ReactJS thành công</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-6 flex flex-col gap-4">
          <h3 className="font-bold text-xl">Kết nối</h3>
          <div>
            <p>Facebook cá nhân</p>
            <p>Hỏi đáp với Easy Frontend</p>
            <p>Youtube</p>
            <p>GitHub</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-6 flex flex-col gap-4">
          <h3 className="font-bold text-xl"> Khoá học</h3>
          <div>
            <p>Javascript từ cơ bản đến nâng cao 🔥</p>
            <p>Playlist NextJS toàn tập có dự án mẫu 🎉</p>
          </div>
        </div>
      </div>
      <div className="text-center py-2">Copyright © 2025 by Easy code.</div>
    </footer>
  );
};

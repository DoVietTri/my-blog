import clsx from "clsx";
import React from "react";

const GAP = "...";

interface MyPaginationProps {
  currentPage: number;
  totalPage: number;
  onChange: (page: number) => void;
}

export const MyPagination = ({
  currentPage,
  totalPage,
  onChange,
}: MyPaginationProps) => {
  const maxVisiblePages = 7; // Số trang tối đa hiển thị (bao gồm dấu ...)

  const pageBuffer = 2; // Số lượng trang bên trái và phải của trang hiện tại

  const pages = [];

  // Tạo logic hiển thị trang đầu, dấu ba chấm, trang giữa và trang cuối
  if (totalPage <= maxVisiblePages) {
    // Nếu tổng số trang nhỏ hơn hoặc bằng số trang tối đa, hiển thị tất cả
    for (let i = 1; i <= totalPage; i++) {
      pages.push(i);
    }
  } else {
    // Trang đầu tiên
    pages.push(1);

    // Hiển thị dấu ba chấm nếu trang hiện tại ở vị trí xa hơn 3 trang từ đầu
    if (currentPage > pageBuffer + 2) {
      pages.push(GAP);
    }

    // Hiển thị các trang xung quanh trang hiện tại
    const startPage = Math.max(2, currentPage - pageBuffer);
    const endPage = Math.min(totalPage - 1, currentPage + pageBuffer);
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Hiển thị dấu ba chấm nếu trang hiện tại không nằm gần cuối
    if (currentPage < totalPage - pageBuffer - 1) {
      pages.push(GAP);
    }

    // Trang cuối cùng
    pages.push(totalPage);
  }

  return (
    <div className="mt-10 flex justify-center items-center gap-4">
      <div className="join">
        <button
          className="join-item btn btn-outline w-20"
          disabled={currentPage === 1}
          onClick={() => onChange(currentPage - 1)}
        >
          Prev
        </button>
        {pages.map((page, index) => (
          <button
            key={index}
            className={clsx("join-item btn btn-outline w-14", {
              "btn-active": page === currentPage,
            })}
            disabled={page === GAP}
            onClick={() => onChange(Number(page))}
          >
            {page}
          </button>
        ))}

        <button
          className="join-item btn btn-outline w-20"
          disabled={currentPage === totalPage}
          onClick={() => onChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

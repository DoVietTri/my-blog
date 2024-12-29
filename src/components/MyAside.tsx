import React from "react";

export const MyAside = () => {
  return (
    <aside className="hidden lg:block w-96 top-0 relative px-4">
      <nav className="w-full sticky top-24">
        <h2 className="text-2xl font-bold">Recent posts</h2>
        <ul className="mt-3 list-none flex flex-col flex-wrap gap-2">
          <li className="text-wrap">
            Quyền lợi khi trở thành Fan Cứng Quyền lợi khi trở thành Fan Cứng
          </li>
          <li>Quyền lợi khi trở thành Fan Cứng</li>
        </ul>
      </nav>
    </aside>
  );
};

import { MyAside } from "@/components/MyAside";
import React from "react";

const BlogLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="relative">
      <div className="container mx-auto flex mt-5">
        <MyAside />
        <main className="flex-1 px-4">{children}</main>
      </div>
    </div>
  );
};

export default BlogLayout;

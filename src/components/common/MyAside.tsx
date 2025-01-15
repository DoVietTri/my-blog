import { getRecentPostAction } from "@/actions/post";
import React from "react";
import { MyLink } from "./MyLink";

export const MyAside = async () => {
  const posts = await getRecentPostAction({ size: 5 });

  return (
    <aside className="hidden lg:block w-96 top-0 relative px-4">
      <nav className="w-full sticky top-24">
        <h2 className="text-2xl font-bold">Recent posts</h2>
        <ul className="mt-3 list-none flex flex-col flex-wrap gap-2">
          {posts.map((post) => (
            <li key={post.id} className="text-wrap">
              <MyLink href={`/blog/${post.slug}`}>{post.title}</MyLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

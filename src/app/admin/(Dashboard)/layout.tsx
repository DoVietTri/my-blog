import { MyLink } from "@/components/common/MyLink";
import { ADMIN_MENU } from "@/constants";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "CRM",
  description: "Hệ thống quản lý",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-base-100 drawer lg:drawer-open">
      <input id="drawer" type="checkbox" className="drawer-toggle"></input>

      <div className="drawer-side z-40">
        <label
          htmlFor="drawer"
          className="drawer-overlay"
          aria-label="Close menu"
        ></label>
        <aside className="bg-base-100 min-h-screen w-80 px-4">
          <div className="h-16 flex items-center">
            <MyLink href="/admin">
              <h1 className="text-2xl font-extrabold cursor-pointer uppercase transition">
                EZ Code
              </h1>
            </MyLink>
          </div>

          <ul className="menu bg-base-200 rounded-box w-56">
            {ADMIN_MENU.map((menu) => (
              <li key={menu.link}>
                <MyLink href={menu.link} className="">
                  <Image
                    src={menu.icon}
                    width={24}
                    height={24}
                    alt={menu.title}
                  />
                  <span>{menu.title}</span>
                </MyLink>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <div className="drawer-content px-8">
        <div className="navbar h-16 bg-base-100 p-0 fixed flex justify-between">
          <nav className="w-full">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </label>
          </nav>
        </div>
        <div className="mt-20">{children}</div>
      </div>
    </div>
  );
}

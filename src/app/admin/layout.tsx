import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM",
  description: "Hệ thống quản lý",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}

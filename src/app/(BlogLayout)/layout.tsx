import { MyHeader } from "@/components/MyHeader";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MyHeader />
      <main>{children}</main>
    </>
  );
}

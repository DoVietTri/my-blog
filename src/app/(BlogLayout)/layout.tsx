import { MyFooter } from "@/components/common/MyFooter";
import { MyHeader } from "@/components/common/MyHeader";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MyHeader />
      <main>{children}</main>
      <MyFooter />
    </>
  );
}

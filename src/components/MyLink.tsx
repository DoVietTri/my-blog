import React from "react";
import Link, { LinkProps } from "next/link";

interface MyLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

export const MyLink = ({
  href,
  children,
  className,
  ...props
}: MyLinkProps) => {
  return (
    <Link
      className={`hover:text-[#f6bd60] transition ${className}`}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};

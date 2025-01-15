import React from "react";
import Link, { LinkProps } from "next/link";

interface MyLinkProps extends LinkProps {
  className?: string;
  isActive?: boolean;
  children: React.ReactNode;
}

export const MyLink = ({
  href,
  children,
  className,
  isActive,
  ...props
}: MyLinkProps) => {
  return (
    <Link
      className={`hover:text-[#f6bd60] transition ${className} ${
        isActive ? "text-[#f6bd60]" : ""
      }`}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};

import React from "react";

export type Tchildern = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: Tchildern) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className || ""}`}>{children}</div>;
}

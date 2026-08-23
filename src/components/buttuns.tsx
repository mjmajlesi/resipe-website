import React, { ComponentProps } from "react";

type Tvariant = "primary" | "ghost" | "outline";

type Tchildren = ComponentProps<"button"> & {
  variant?: Tvariant;
};

const variants: Record<Tvariant, string> = {
  primary: "bg-accent text-[#1a1206] hover:bg-accent-strong shadow-md shadow-accent/25",
  ghost: "bg-white/5 text-white border border-white/10 hover:bg-white/10",
  outline: "bg-transparent text-accent border-2 border-accent hover:bg-accent hover:text-[#1a1206]",
};

export default function Button({ children, className = "", variant = "primary", ...root }: Tchildren) {
  return (
    <button
      {...root}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-95 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

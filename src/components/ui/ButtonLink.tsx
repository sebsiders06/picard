import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "outline-lg";

const variantClass: Record<Variant, string> = {
  solid: "sn-btn sn-btn-solid",
  outline: "sn-btn sn-btn-outline",
  "outline-lg": "sn-btn sn-btn-outline-lg",
};

export function ButtonLink({
  href,
  children,
  variant,
  className = "",
  size = "md",
}: {
  href: string;
  children: ReactNode;
  variant: Variant;
  className?: string;
  size?: "md" | "lg";
}) {
  const sizeClass = size === "lg" ? " sn-btn-lg" : "";
  return (
    <a href={href} className={`${variantClass[variant]}${sizeClass} ${className}`.trim()}>
      {children}
    </a>
  );
}

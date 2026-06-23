"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContactButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function ContactButton({ children, className, ...props }: ContactButtonProps) {
  return (
    <button
      {...props}
      className={cn(className)}
      onClick={(e) => {
        if (props.onClick) props.onClick(e);
        window.dispatchEvent(new Event('openContactModal'));
      }}
    >
      {children}
    </button>
  );
}

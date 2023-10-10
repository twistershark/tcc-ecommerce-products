import React, { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps {
  to: string;
  children: ReactNode;
}

export function Link({ to, children }: LinkProps) {
  return (
    <RouterLink
      to={to}
      className="pl-text-[#838383] pl-font-sans pl-text-sm pl-underline hover:pl-text-black pl-transition pl-duration-200"
    >
      {children}
    </RouterLink>
  );
}

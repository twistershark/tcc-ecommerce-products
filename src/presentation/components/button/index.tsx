import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "full" | "outline";
  className?: string;
  children: ReactNode;
}

export function Button({
  variant = "full",
  className,
  children,
  ...rest
}: Readonly<ButtonProps>) {
  const commonStyles =
    "pl-w-full pl-h-[46px] text-sm pl-font-sans pl-font-semibold pl-transform pl-transition pl-duration-300 hover:pl-scale-105";

  const variants = {
    full: "pl-bg-black pl-text-white",
    outline: "pl-border pl-border-black pl-text-black",
  };

  return (
    <button
      className={[commonStyles, variants[variant], className].join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}

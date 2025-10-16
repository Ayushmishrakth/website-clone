import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition ${className}`}
    >
      {children}
    </button>
  );
}

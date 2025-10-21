import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  loading?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  loading = false,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className="w-full py-2 px-4 rounded-lg font-medium text-white bg-amber-500 hover:bg-amber-600
                 focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:opacity-50 transition"
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;

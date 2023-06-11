"use client";
import { IconType } from "react-icons/lib";

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  Icon?: IconType;
}

export default function Button(props: ButtonProps) {
  const { onClick, label, disabled, outline, small, Icon } = props;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full text-center cursor-pointer ${
        outline ? "bg-white border-black text-black" : "bg-rose-500 border-rose-500 text-white"
      } ${small ? "text-sm py-1 font-light border" : "text-md py-3 font-semibold border-2"}`}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
}

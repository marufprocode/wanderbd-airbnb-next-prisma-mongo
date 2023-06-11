import { IconType } from "react-icons/lib";

interface ButtonProps {
  onClick: (event: MouseEvent) => void;
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

export default function Button(props: ButtonProps) {
  const { onClick, label, disabled, outline, small, icon } = props;

  return (
    <div
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full text-center cursor-pointer ${
        outline ? "bg-white border-black text-black" : "bg-rose-500 border-rose-500 text-white"
      } ${small ? "text-sm py-1 font-light border" : "text-md py-3 font-semibold border-2"}`}
    >
      {label}
    </div>
  );
}

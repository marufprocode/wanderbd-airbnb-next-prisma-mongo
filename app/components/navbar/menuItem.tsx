interface MenuItemProps {
  onClick: () => void;
  label: string;
}

export default function MenuItem({ onClick, label }: MenuItemProps) {
  return (
    <div onClick={onClick} className="px-3 py-3 hover:bg-neutral-100 transition font-semibold">
      {label}
    </div>
  );
}

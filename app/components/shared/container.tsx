import { RCchildren } from "@/app/types/childrenTypes";

export default function Container({ children }: RCchildren) {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
}

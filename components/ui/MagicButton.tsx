import React from "react";

export const MagicButton = ({
  title,
  position,
  handleClick,
  icon,
  otherClasses,
}: {
  title: string;
  position: string;
  handleClick?: () => void;
  icon: React.ReactNode;
  otherClasses?: string;
}) => {
  return (
    <button
      className={`relative flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none `}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_53%,#0000_0%,#686D76_50%,#151515_100%)]" />
      <span
        className={`inline-flex h-full z-50 tracking-widest w-full cursor-pointer items-center justify-center rounded-lg bg-zinc-950 px-7 text-sm font-semibold lg:px-16 text-white backdrop-blur-3xl gap-3 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

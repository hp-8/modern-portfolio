import { Separator } from "./ui/separator";

export const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <>
      <Separator className="bg-white/[0.5] opacity-30" />
      <div className="py-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-18 gap-6 cursor-default">
          <ul className="flex flex-col justify-between gap-5 lg:gap-8 items-start lg:text-base text-sm">
            <li className="px-1 text-white/[0.5] lg:text-white/[0.8] bg-gradient-to-r from-white/[0.05] to-black  rounded-lg">
              Copyright © {getCurrentYear()} Mofijur Rahman
            </li>

            <li className="px-1 text-white/[0.5] lg:text-white/[0.8] bg-gradient-to-r from-white/[0.05] to-black  rounded-lg">
              © {getCurrentYear()} Mofijur Rahman All Rights Reserved.
            </li>
          </ul>
          <ul className="flex-1 w[90vw] h-[30vh] lg:w-[60vw] flex items-center justify-center lg:justify-end">
            <li className="bg-gradient-to-r from-white/[0.05] to-black  rounded pl-[3px] lg:w-[50%] text-start ml-2 lg:ml-0 flex items-center justify-center text-sm text-white/[0.7] tracking-wider">
              Copyright © {getCurrentYear()} Mofijur Rahman. All rights
              reserved. Unauthorized use and/or duplication of this material
              without express and written permission from this site&apos;s
              author and/or owner is strictly prohibited. Excerpts and links may
              be used, provided that full and clear credit is given to Mofijur
              Rahman and this site with appropriate and specific direction to
              the original content.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

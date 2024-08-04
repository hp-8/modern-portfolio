"use client";

import cn from "@/lib/cn";
import { Copy, CopyCheck } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BackgroundGradientAnimation } from "./BgGradient";
import { GridGlobe } from "./GridGlobe";
import { MagicButton } from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  id,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
  id: number;
  titleClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("patadiaharsh.8@gmail.com");
    setCopied(true);
    toast.success("Email Copied.", {
      style: {
        border: "1px solid #ffffff ",
        backgroundColor: "#000000",

        padding: "0.15rem",
        color: "#ffffff",
      },
      iconTheme: {
        primary: "#000000",
        secondary: "#ffffff",
      },
    });
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.4] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(10,10,10)",
        backgroundColor:
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(150,150,150,1) 100%, rgba(0,0,0,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center "} h-full`}>
        <div className="w-full h-full absolute ">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                "object-cover object-center rounded-lg"
              )}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover rounded-lg object-center  w-full h-full"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(0,0,0)"
            gradientBackgroundEnd="rgb(0,0,0)"
            firstColor="255,255,255"
            secondColor="150,150,150"
            thirdColor="255,255,255"
            fourthColor="255,255,255"
            fifthColor="255,255,255"
            pointerColor="255,255,255"
          >
            <div className="flex absolute items-center justify-center z-20 text-white-200 font-bold"></div>
          </BackgroundGradientAnimation>
        )}

        {id === 2 && <GridGlobe />}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-start"
          )}
        >
          <div className="font-bold text-lg  lg:text-3xl z-10 max-w-96">
            {title}
          </div>
          <div className="font-sans font-extralight text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
        </div>
      </div>
      {id === 3 && (

        <div className="flex gap-1 lg:gap-5 px-2 w-fit absolute -right-3 lg:-right-2 ">
          
          <div className="flex flex-col gap-2 lg:gap-4">
            {["Next.js", "Prisma", "TypeScript"].map((item) => (
              <span
                key={item}
                className="text-xs py-1 px-2 lg:text-sm opacity-70 bg-black rounded-lg text-center  "
              >
                {item}
              </span>
            ))}
            <span className="bg-black/[0.3] p-3 rounded-lg text-center" />
          </div>
          
          <div className="flex flex-col gap-2 lg:gap-4">
            <span className="bg-black/[0.3] rounded-lg text-center p-3" />
            {["Tailwind", "MongoDB", "PostgreSQL"].map((item) => (
              <span
                key={item}
                className="text-xs lg:text-sm py-1 px-2 opacity-70 bg-black rounded-lg text-center  "
              >
                {item}
              </span>
            ))}
          </div>


          <div className="flex flex-col gap-2 lg:gap-4">
            {["ReactJS", "ExpressJS", "ThreeJS"].map((item) => (
              <span
                key={item}
                className="text-xs py-1 px-2 lg:text-sm opacity-70 bg-black rounded-lg text-center  "
              >
                {item}
              </span>
            ))}
            <span className="bg-black/[0.3] p-3 rounded-lg text-center" />
          </div>

        </div>
      )}
      {id === 6 && (
        <div className="mt-5 relative flex items-center flex-col">
          <Toaster position="bottom-left" />

          <MagicButton
            position="left"
            title={copied ? "Email Copied." : "Copy My Email"}
            icon={copied ? <CopyCheck size={18} /> : <Copy size={18} />}
            handleClick={handleCopy}
          />
        </div>
      )}
    </div>
  );
};

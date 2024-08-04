import { Navigation } from "lucide-react";
import { MagicButton } from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/Text-generate-effect";
import { WavyBackground } from "./ui/Wavy-Background";

export const Hero = () => {
  return (
    <div className="pb-20 pt-32 cursor-default">
      <div className="">
        <Spotlight
          className="-top-30 -left-10 md:-top-20 md:-left-32 h-screen "
          fill="white"
        />
        <Spotlight
          className="-top-40 -left-49 md:-top-20 md:-left-32 h-screen "
          fill="gray"
        />
      </div>
      <div className="h-screen absolute top-0 left-0 w-full dark:bg-dot-white/[0.2] flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <WavyBackground
        colors={["#000000", "#FFFFFF", "#808080", "#2f3d5e", "#5e5c59"]}
        blur={15}
        speed="slow"
        waveWidth={25}
        waveOpacity={0.5}
      >
        <div className="flex justify-center relative z-10 my-20 ">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="text-xs tracking-widest text-center">
              Hi 👋🏻 My Name is
            </h2>
            <TextGenerateEffect
              words="Harsh Patadia"
              className="text-center text-4xl lg:text-6xl uppercase font-black tracking-wide"
            />
            <h2 className="text-sm tracking-wide text-center md:tracking-wider font-semibold my-6">
              I&apos;m a Full Stack Developer from India. 
            </h2>
            <a href="#about">
              <MagicButton
                position="right"
                icon={<Navigation size={17} />}
                otherClasses=""
                title="Show My Work"
              />
            </a>
          </div>
        </div>
      </WavyBackground>
    </div>
  );
};

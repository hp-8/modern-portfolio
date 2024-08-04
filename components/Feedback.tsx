import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/Infinite-Moving-Cards";

export const Feedback = () => {
  return (
    <div className="py-20" id="reviews">
      <h1 className="text-center lg:text-4xl text-2xl font-bold tracking-wide">
        Kind feedback from{" "}
        <span className="bg-gradient-to-r from-white/[0.05] to-black rounded-lg px-1 ">
          satisfied clients
        </span>
      </h1>
      <div className="flex flex-col items-center select-none">
        <div className="h-[50vh] md:h-[30rem] rounded-md items-center flex relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            speed="slow"
            direction="right"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

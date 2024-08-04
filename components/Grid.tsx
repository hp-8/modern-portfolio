import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export const Grid = () => {
  return (
    <section id="about" className="">
      <BentoGrid className="w-full py-20">
        {gridItems.map(
          ({
            className,
            id,
            img,
            description,
            imgClassName,
            spareImg,
            title,
            titleClassName,
          }) => (
            <BentoGridItem
              title={title}
              id={id}
              key={id}
              className={className}
              description={description}
              img={img}
              imgClassName={imgClassName}
              spareImg={spareImg}
              titleClassName={titleClassName}

            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

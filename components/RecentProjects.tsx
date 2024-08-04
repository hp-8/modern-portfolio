"use client";

import { projects } from "@/data";
import { Link } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-Card";

export const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="text-center lg:text-4xl text-2xl font-bold tracking-wide">
        A small showcase of my{" "}
        <span className="bg-gradient-to-r from-white/[0.05] to-black rounded-lg px-1 ">
          recent projects
        </span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((project) => (
          <div className="" key={project.id}>
            {project.img && (
              <CardContainer key={project.id} containerClassName="inter-var">
                <CardBody className="w-80 rounded-lg space-y-3">
                  <CardItem rotateX={30} className="w-full h-full">
                    <img
                      className="w-full h-full object-cover object-center rounded-lg"
                      src={project.img}
                      alt={project.title}
                    />
                  </CardItem>
                  <CardItem
                    rotateX={20}
                    as="h2"
                    className="text-xl lg:text-2xl select-none font-bold tracking-wide"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    className="text-sm my-4 select-none md:font-extralight font-light"
                    rotateX={10}
                  >
                    {project.des}
                  </CardItem>
                  <CardItem className="flex gap-2 lg:gap-7 py-2 flex-wrap">
                    {project.iconLists.map((item) => (
                      <img src={item} alt="" key={item} />
                    ))}
                  </CardItem>
                  <CardItem className="cursor-pointer bg-gradient-to-r from-white/[0.04] to-black rounded-lg">
                    <button
                      className="px-4 py-2 rounded-xl text-xs font-normal gap-x-2 flex items-center"
                      onClick={() => window.open(project.link)}
                    >
                      Visit Site
                      <Link size={15} />
                    </button>
                  </CardItem>
                </CardBody>
              </CardContainer>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

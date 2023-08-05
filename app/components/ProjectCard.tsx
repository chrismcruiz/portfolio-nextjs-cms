import { ProjectsSliceDefaultItem } from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

interface Props extends ProjectsSliceDefaultItem {
  index: number;
  itemsLength: number;
}

const ProjectCard = ({
  project_image,
  project_title,
  project_description,
  index,
  itemsLength,
}: Props) => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen embla__slide--projects">
      {/* <motion.img
                initial={{ opacity: 0, y: -300 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-[400px] w-[400px]"
                src="https://wpvip.edutopia.org/wp-content/uploads/2022/10/robinson-169hero-portfolio-shutterstock.jpg?w=2880&quality=85"
                alt=""
              /> */}
      <PrismicNextImage field={project_image} className="h-[400px] w-[400px]" />
      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">
          <span className="underline decoration-[#F7AB0A]/50">
            Case Study {index + 1} of {itemsLength}:
          </span>{" "}
          {project_title}
        </h4>
        <PrismicRichText
          field={project_description}
          components={{
            paragraph: ({ children }) => (
              <p className="text-lg text-center md:text-left">{children}</p>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default ProjectCard;

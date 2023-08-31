import { ProjectsSliceDefaultItem } from "@/prismicio-types";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
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
  link_to_demo,
  link_to_repo,
  index,
  itemsLength,
}: Props) => (
  <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center md:px-44 h-screen md:h-full embla__slide--projects">
    {/* <motion.img
                initial={{ opacity: 0, y: -300 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-[400px] w-[400px]"
                src="https://wpvip.edutopia.org/wp-content/uploads/2022/10/robinson-169hero-portfolio-shutterstock.jpg?w=2880&quality=85"
                alt=""
              /> */}
    <PrismicNextImage field={project_image} className="h-[400px] w-[400px] lg:h-[550px] lg:w-[800px] object-contain object-center" />
    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
      <h4 className="text-4xl font-semibold text-center">
        {/* <span className="underline decoration-[#3AD9CE]/50">
            Case of Study {index + 1} of {itemsLength}:
          </span>{" "} */}
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
      <div className="projects-buttons flex gap-2 justify-center">
        {link_to_demo.link_type !== 'Any' &&
          <PrismicNextLink field={link_to_demo} className="border border-[#3AD9CE] px-2 py-1" target="_blank">Link to Demo</PrismicNextLink>

        }
        {link_to_repo.link_type !== 'Any' &&
          <PrismicNextLink field={link_to_repo} className="border border-[#3AD9CE] px-2 py-1" target="_blank">Link to Repo</PrismicNextLink>}
      </div>
    </div>
  </div>
);


export default ProjectCard;

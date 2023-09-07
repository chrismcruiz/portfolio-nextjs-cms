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
  <div className="w-screen flex-shrink-0 flex flex-col space-y-5 items-center md:px-44 h-full embla__slide--projects">
    {/* <motion.img
                initial={{ opacity: 0, y: -300 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-[400px] w-[400px]"
                src="https://wpvip.edutopia.org/wp-content/uploads/2022/10/robinson-169hero-portfolio-shutterstock.jpg?w=2880&quality=85"
                alt=""
              /> */}
    <PrismicNextImage field={project_image} className="h-[250px] w-[400px] lg:h-[550px] lg:w-[800px] object-contain" />
    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
      <h4 className="text-2xl md:text-4xl font-semibold text-center px-2">
        {/* <span className="underline decoration-[#3AD9CE]/50">
            Case of Study {index + 1} of {itemsLength}:
          </span>{" "} */}
        {project_title}
      </h4>
      <PrismicRichText
        field={project_description}
        components={{
          paragraph: ({ children }) => (
            <p className="text-base md:text-lg text-center md:text-left px-4">{children}</p>
          ),
        }}
      />
      <div className="projects-buttons flex gap-2 justify-center">
        {link_to_demo?.link_type !== 'Any' &&
        // text-[#64ffda] p-2 border border-solid border-[#64ffda] rounded-[4px]
        
          <PrismicNextLink field={link_to_demo} className="relative inline-block text-lg group" target="_blank"><span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span className="relative">Link to Demo</span>
          </span>
          <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span></PrismicNextLink>

        }
        {link_to_repo?.link_type !== 'Any' &&
           <PrismicNextLink field={link_to_repo} className="relative inline-block text-lg group" target="_blank"><span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
           <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
           <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
           <span className="relative">Link to Repo</span>
           </span>
           <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span></PrismicNextLink>}
      </div>
    </div>
  </div>
);


export default ProjectCard;

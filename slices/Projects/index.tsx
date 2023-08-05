"use client";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ProjectCard from "@/app/components/ProjectCard";

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = ({ slice }: ProjectsProps): JSX.Element => {
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
  });
  const { title, information } = slice.primary;
  const { items } = slice;
  const itemsLength = items.length;
  return (
    <section
      id="projects"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      >
        <PrismicRichText
          field={title}
          components={{
            heading2: ({ children }) => (
              <h2 className="sectionHeading">{children}</h2>
            ),
          }}
        />
        <PrismicRichText
          field={information}
          components={{
            paragraph: ({ children }) => (
              <div className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
                {children}
              </div>
            ),
          }}
        />
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {items.map((project, index) => (
                <ProjectCard
                  key={index}
                  {...project}
                  index={index}
                  itemsLength={itemsLength}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full absolute top-[30px] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
      </motion.div>
    </section>
  );
};

export default Projects;

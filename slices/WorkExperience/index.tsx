"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { motion } from "framer-motion";
// import useEmblaCarousel from "embla-carousel-react";
import ExperienceCard from "@/app/components/ExperienceCard";
import useEmblaCarousel from "embla-carousel-react";
/**
 * Props for `WorkExperience`.
 */
export type WorkExperienceProps =
  SliceComponentProps<Content.WorkExperienceSlice>;

/**
 * Component for "WorkExperience" Slices.
 */
const WorkExperience = ({ slice }: WorkExperienceProps): JSX.Element => {
  // const OPTIONS = {
  //   slidesToScroll: "auto",
  //   containScroll: "trimSnaps",
  // };

  // const [emblaRef] = useEmblaCarousel({ align: "start" });
  const [emblaRef] = useEmblaCarousel({
    // align: "start",
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
  });

  const { items } = slice;

  return (
    <section
      id="experience"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative h-screen md:h-full text-left flex flex-col overflow-hidden md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-0 uppercase tracking-[20px] text-gray-500 text-2xl">
          Experience
        </h3>
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            {/* w-full flex space-x-5 p-10 */}
            <div className="embla__container">
              {items.map((item, index) => (
                <ExperienceCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;

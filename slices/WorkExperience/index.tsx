"use client";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { motion } from "framer-motion";
import ExperienceCard from "@/app/components/ExperienceCard";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import {
  DotButton,
  NextButton,
  PrevButton,
} from "@/app/components/EmblaCarouselArrowsDots";
import { useCallback, useEffect, useState } from "react";
/**
 * Props for `WorkExperience`.
 */
export type WorkExperienceProps =
  SliceComponentProps<Content.WorkExperienceSlice>;

/**
 * Component for "WorkExperience" Slices.
 */
const WorkExperience = ({ slice }: WorkExperienceProps): JSX.Element => {
  const {title} = slice.primary
  // const OPTIONS = {
  //   slidesToScroll: "auto",
  //   containScroll: "trimSnaps",
  // };

  // const [emblaRef] = useEmblaCarousel({ align: "start" });
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);
  const { items } = slice;

  return (
    <section
      id="experience"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        // h-screen 
        className="md:h-full text-left flex flex-col overflow-hidden max-w-full px-10 py-20 mx-auto items-center"
      >
            <PrismicRichText
          field={title}
          components={{
            heading2: ({ children }) => (
              <h2 className="sectionHeading mb-20">{children}</h2>
            ),
          }}
        />
        <div className="embla relative">
          <div className="embla__viewport" ref={emblaRef}>
            {/* w-full flex space-x-5 p-10 */}
            <div className="embla__container">
              {items.map((item, index) => (
                <ExperienceCard key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="embla__buttons embla__buttons--experience">
            <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
            <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default WorkExperience;

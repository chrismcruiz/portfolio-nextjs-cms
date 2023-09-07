"use client";
import { motion } from "framer-motion";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ProjectCard from "@/app/components/ProjectCard";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import {
  DotButton,
  NextButton,
  PrevButton,
} from "@/app/components/EmblaCarouselArrowsDots";
import { useCallback, useEffect, useState } from "react";
/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = ({ slice }: ProjectsProps): JSX.Element => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const { title, information } = slice.primary;
  const { items } = slice;
  const itemsLength = items.length;
  return (
    <section
      id="projects"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        // h-screen 
        className="container h-full flex flex-col max-w-full justify-evenly mx-auto items-center z-0 space-y-10 relative px-6 md:px-10 py-40"
      >
        <PrismicRichText
          field={title}
          components={{
            heading2: ({ children }) => (
              <h2 className="sectionHeading mb-0">{children}</h2>
            ),
          }}
        />
        <PrismicRichText
          field={information}
          components={{
            paragraph: ({ children }) => (
              <div className="uppercase tracking-[3px] text-gray-500 text-sm text-left">
                {children}
              </div>
            ),
          }}
        />
        <div className="embla relative">
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
          <div className="embla__buttons">
            <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
            <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
          </div>
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => scrollTo(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
        {/* <div className="w-full absolute top-[30px] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" /> */}
      </motion.div>
    </section>
  );
};

export default Projects;

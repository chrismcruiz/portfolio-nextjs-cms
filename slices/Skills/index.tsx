"use client";

import { motion } from "framer-motion";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Skill from "@/app/components/Skill";

/**
 * Props for `Skills`.
 */
export type SkillsProps = SliceComponentProps<Content.SkillsSlice>;

/**
 * Component for "Skills" Slices.
 */
const Skills = ({ slice }: SkillsProps): JSX.Element => {
  const { title, instructions } = slice.primary;
  const { items } = slice;
  return (
    <section
      id="skills"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="min-h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
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
          field={instructions}
          components={{
            paragraph: ({ children }) => (
              <div className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
                {children}
              </div>
            ),
          }}
        />
        <div className="grid grid-cols-4 gap-5">
          {items.map((skill, index) => {
            const itemsLength = items.length;
            const shouldGoLeft = index + 1 > Math.ceil(itemsLength / 2);
            return (
              <Skill key={index} {...skill} directionLeft={shouldGoLeft} />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

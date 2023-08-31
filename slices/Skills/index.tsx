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
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        // h-screen
        className="md:h-full flex flex-col text-center md:text-left max-w-[2000px] px-10 py-20 justify-center mx-auto items-center space-y-10 container"
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
          field={instructions}
          components={{
            paragraph: ({ children }) => (
              <div className="uppercase tracking-[3px] text-gray-500 text-sm">
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

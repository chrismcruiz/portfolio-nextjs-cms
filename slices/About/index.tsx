"use client";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { motion } from "framer-motion";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  const { title, subtitle, description, image } = slice.primary;
  return (
    <section
      id="about"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen md:h-full flex flex-col relative text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center max-w-7xl"
      >
        <PrismicRichText
          field={title}
          components={{
            heading2: ({ children }) => (
              <h2 className="sectionHeading">{children}</h2>
            ),
          }}
        />
        <PrismicNextImage
          field={image}
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[550px]"
        />
        <div className="space-y-10 px-0 md:px-10">
          <PrismicRichText
            field={subtitle}
            components={{
              heading3: ({ children }) => (
                <h3 className="text-4xl font-semibold">{children}</h3>
              ),
              label: ({ node, children }) => (
                <span className={`${node.data.label} decoration-[#F7AB0A]/50`}>
                  {children}
                </span>
              ),
            }}
          />
          <PrismicRichText
            field={description}
            components={{
              paragraph: ({ children }) => (
                <p className="text-base">{children}</p>
              ),
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;

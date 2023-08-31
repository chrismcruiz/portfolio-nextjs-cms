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
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=" max-w-7xl mx-auto text-center px-10 py-20"
      >
        <PrismicRichText
          field={title}
          components={{
            heading2: ({ children }) => (
              <h2 className="sectionHeading">{children}</h2>
            ),
          }}
        />
        <div className="w-full md:flex md:gap-2">
          <div className="w-full flex justify-center">
            <PrismicNextImage
              field={image}
              // -mb-20 
              className="mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[550px]"
            />
          </div>
          <div className="w-full px-0 md:px-10 text-left space-y-10">
            <PrismicRichText
              field={subtitle}
              components={{
                heading3: ({ children }) => (
                  <h3 className="text-4xl font-semibold">{children}</h3>
                ),
                label: ({ node, children }) => (
                  <span
                    className={`${node.data.label} decoration-[#27B2BA]/50`}
                  >
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
        </div>
      </motion.div>
    </section>
  );
};

export default About;
